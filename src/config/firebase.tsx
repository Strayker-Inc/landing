import * as firebase from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getMessaging } from "firebase/messaging"
import { initializeAnalytics } from 'firebase/analytics';
import * as fireorm from 'fireorm';
import config from "./config";
// require('firebase/firestore');

// Initialize firebase app with analytics
const app = firebase.initializeApp(config.firebaseConfig);
initializeAnalytics(app);

export const db = getFirestore(app);
export const orm = fireorm.initialize(db);
export const messaging = getMessaging(app);


export default app;
