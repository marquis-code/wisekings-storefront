import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

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
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    // Analytics only runs on-client
    let analytics = null
    if (process.client) {
        analytics = getAnalytics(app)
    }

    return {
        provide: {
            fbAuth: auth,
            googleProvider,
            fbAnalytics: analytics
        }
    }
})
