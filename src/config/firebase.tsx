import * as firebase from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeAnalytics } from 'firebase/analytics';
import * as fireorm from 'fireorm';
import config from "./config";
// require('firebase/firestore');

// Initialize firebase app with analytics
const fb = firebase.initializeApp(config.firebaseConfig);
initializeAnalytics(fb);
export const db = getFirestore(fb);

export const orm = fireorm.initialize(db);

export default fb;
