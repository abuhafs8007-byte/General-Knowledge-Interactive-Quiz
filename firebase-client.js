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
            { getFirestore },
            { getFunctions },
            { initializeAppCheck, ReCaptchaV3Provider }
        ] = await Promise.all([
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-app.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-auth.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-firestore.js`),
            import(`https://www.gstatic.com/firebasejs/${sdkVersion}/firebase-functions.js`),
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

        initializationStage = 'Functions';
        const functions = getFunctions(app, functionsRegion || 'us-central1');
        console.info('Functions: OK');

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
            functions,
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
