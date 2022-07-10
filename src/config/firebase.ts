import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

function firebaseApp(): {
  app: FirebaseApp;
  auth: Auth;
} {
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  const app: FirebaseApp = initializeApp(firebaseConfig);
  const auth: Auth = getAuth(app);

  return { app, auth };
}
export default firebaseApp;
