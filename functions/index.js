const { createHash } = require('node:crypto');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { HttpsError, onCall } = require('firebase-functions/v2/https');

initializeApp();

const db = getFirestore();
const functionOptions = {
    region: 'us-central1',
    enforceAppCheck: true
};

function normalizeStudentId(value) {
    return typeof value === 'string' ? value.trim().toUpperCase() : '';
}

exports.verifyStudentId = onCall(functionOptions, async request => {
    const studentId = normalizeStudentId(request.data && request.data.studentId);
    if (!studentId || studentId.length > 100 || studentId.includes('/')) {
        throw new HttpsError('invalid-argument', 'Enter a valid Student ID.');
    }

    const studentSnapshot = await db.collection('students').doc(studentId).get();
    if (!studentSnapshot.exists) {
        throw new HttpsError('not-found', 'Student ID not found.');
    }

    const student = studentSnapshot.data();
    const name = typeof student.name === 'string' ? student.name.trim() : '';
    const className = typeof (student.className || student.class) === 'string'
        ? String(student.className || student.class).trim()
        : '';
    if (!name || !className) {
        throw new HttpsError('failed-precondition', 'The student record is incomplete.');
    }

    return { studentId, name, className };
});

exports.claimAttempt = onCall(functionOptions, async request => {
    const studentId = normalizeStudentId(request.data && request.data.studentId);
    const subjectId = request.data && request.data.subjectId;
    const attemptId = request.data && request.data.attemptId;
    if (!studentId || studentId.length > 100 || studentId.includes('/') ||
        typeof subjectId !== 'string' || !subjectId.trim() || subjectId.length > 150 || subjectId.includes('/') ||
        typeof attemptId !== 'string' || !attemptId.trim() || attemptId.length > 150) {
        throw new HttpsError('invalid-argument', 'A valid Student ID, subject, and attempt ID are required.');
    }

    const normalizedSubjectId = subjectId.trim();
    const normalizedAttemptId = attemptId.trim();
    const claimId = createHash('sha256')
        .update(`${studentId}\u0000${normalizedSubjectId}`)
        .digest('hex');
    const claimRef = db.collection('attemptClaims').doc(claimId);
    const studentRef = db.collection('students').doc(studentId);
    const subjectRef = db.collection('subjects').doc(normalizedSubjectId);

    return db.runTransaction(async transaction => {
        const [claimSnapshot, studentSnapshot, subjectSnapshot] =
            await transaction.getAll(claimRef, studentRef, subjectRef);

        if (!studentSnapshot.exists) {
            throw new HttpsError('not-found', 'Student ID not found.');
        }
        if (!subjectSnapshot.exists || subjectSnapshot.data().isEnabled === false) {
            throw new HttpsError('failed-precondition', 'This examination is not available.');
        }

        if (claimSnapshot.exists) {
            if (claimSnapshot.data().attemptId === normalizedAttemptId &&
                claimSnapshot.data().status === 'In Progress') {
                return { claimed: true, alreadyClaimed: true, claimId };
            }
            throw new HttpsError('already-exists', 'An attempt already exists for this Student ID and subject.');
        }

        transaction.create(claimRef, {
            studentId,
            subjectId: normalizedSubjectId,
            attemptId: normalizedAttemptId,
            status: 'In Progress',
            dateStarted: new Date().toISOString()
        });
        return { claimed: true, alreadyClaimed: false, claimId };
    });
});
