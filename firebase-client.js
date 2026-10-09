const firebaseConfig = window.CBT_FIREBASE_CONFIG;
const requiredConfigValues = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId',
    'appCheckSiteKey'
];

function isFirebaseConfigured() {
    return firebaseConfig &&
        requiredConfigValues.every(key =>
            typeof firebaseConfig[key] === 'string' &&
            firebaseConfig[key].trim() !== '' &&
            !firebaseConfig[key].includes('YOUR_')
        );
}

async function initializeFirebaseClient() {
    if (!isFirebaseConfigured()) {
        throw new Error('Firebase initialization failed: required client configuration is missing.');
    }

    let initializationStage = 'Firebase SDK loading';

    try {
        const sdkVersion = '11.10.0';
        const [
            { initializeApp },
            { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut },
            { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, writeBatch },
            { initializeAppCheck, ReCaptchaV3Provider }
        ] = await Promise.all([
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-app.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-auth.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-firestore.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-app-check.js`)
        ]);

        const { appCheckSiteKey, functionsRegion, ...firebaseOptions } = firebaseConfig;
        initializationStage = 'Firebase App';
        const app = initializeApp(firebaseOptions);
        console.info('Firebase App: OK');

        initializationStage = 'Authentication';
        const auth = getAuth(app);
        console.info('Authentication: OK');

        initializationStage = 'Firestore';
        const db = getFirestore(app);
        console.info('Firestore: OK');

        initializationStage = 'App Check';
        if (window.location.hostname.endsWith('.app.github.dev')) {
            self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
        }
        const appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider(appCheckSiteKey),
            isTokenAutoRefreshEnabled: true
        });
        console.info('App Check: initialized');

        window.cbtFirebase = {
            app,
            auth,
            signInWithEmailAndPassword,
            onAuthStateChanged,
            signOut,
            db,
            async listDocuments(collectionName) {
                const snapshot = await getDocs(collection(db, collectionName));
                return snapshot.docs.map(document => ({ id: document.id, ...document.data() }));
            },
            async getDocument(collectionName, id) {
                const snapshot = await getDoc(doc(db, collectionName, id));
                return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
            },
            async writeDocuments(operations) {
                for (let offset = 0; offset < operations.length; offset += 400) {
                    const batch = writeBatch(db);
                    operations.slice(offset, offset + 400).forEach(operation => {
                        const reference = doc(db, operation.collection, operation.id);
                        if (operation.type === 'delete') {
                            batch.delete(reference);
                        } else {
                            batch.set(reference, operation.data);
                        }
                    });
                    await batch.commit();
                }
            },
            async setDocument(collectionName, id, data) {
                await setDoc(doc(db, collectionName, id), data);
            },
            async deleteDocument(collectionName, id) {
                await deleteDoc(doc(db, collectionName, id));
            },
            appCheck
        };
        console.info('Firebase initialization: OK');
        return window.cbtFirebase;
    } catch (error) {
        console.error(`Firebase initialization failed during ${initializationStage}:`, error);
        window.cbtFirebaseError = error;
        throw error;
    }
}

window.cbtFirebaseReady = initializeFirebaseClient();
