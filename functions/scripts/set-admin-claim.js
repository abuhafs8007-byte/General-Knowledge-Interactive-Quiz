const { createInterface } = require('node:readline/promises');
const { applicationDefault, initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const uid = String(process.argv[2] || '').trim();
const projectId = process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT;

async function grantAdministratorRole() {
    if (!uid || uid.length > 128 || uid.includes('/')) {
        throw new Error('Provide one valid Firebase Authentication UID (maximum 128 characters, no slash).');
    }
    if (!projectId) {
        throw new Error('Set GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT to the Firebase project ID.');
    }
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
        throw new Error('Run this command in an interactive terminal so the UID confirmation is required.');
    }

    initializeApp({
        credential: applicationDefault(),
        projectId
    });

    const auth = getAuth();
    const user = await auth.getUser(uid);
    console.log(`Project: ${projectId}`);
    console.log(`UID: ${user.uid}`);
    console.log(`Email: ${user.email || '(no email on account)'}`);

    const prompt = createInterface({ input: process.stdin, output: process.stdout });
    let confirmation;
    try {
        confirmation = (await prompt.question('Type the exact UID above to grant admin:true: ')).trim();
    } finally {
        prompt.close();
    }

    if (confirmation !== user.uid) {
        console.log('Cancelled. No custom claims were changed.');
        return;
    }

    await auth.setCustomUserClaims(user.uid, {
        ...(user.customClaims || {}),
        admin: true
    });
    console.log(`Granted admin:true to UID ${user.uid}. The user must refresh their ID token or sign in again for the claim to appear.`);
}

grantAdministratorRole().catch(error => {
    console.error('Unable to grant administrator access.', error);
    process.exitCode = 1;
});
