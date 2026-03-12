let initPromise: Promise<any> | null = null;
let fbAuth: any = null;
let googleProvider: any = null;

export const useFirebase = () => {
    const config = useRuntimeConfig()

    const initFirebase = async () => {
        if (!process.client) return null;
        if (initPromise) return initPromise;

        initPromise = new Promise(async (resolve) => {
            const { initializeApp } = await import('firebase/app');
            const { getAuth, GoogleAuthProvider } = await import('firebase/auth');

            const firebaseConfig = {
                apiKey: config.public.firebaseApiKey as string,
                authDomain: config.public.firebaseAuthDomain as string,
                projectId: config.public.firebaseProjectId as string,
                storageBucket: config.public.firebaseStorageBucket as string,
                messagingSenderId: config.public.firebaseMessagingSenderId as string,
                appId: config.public.firebaseAppId as string,
                measurementId: config.public.firebaseMeasurementId as string
            }

            const app = initializeApp(firebaseConfig)
            fbAuth = getAuth(app)
            googleProvider = new GoogleAuthProvider()
            resolve({ fbAuth, googleProvider })
        });
        
        return initPromise;
    };

    return {
        initFirebase,
    }
}
