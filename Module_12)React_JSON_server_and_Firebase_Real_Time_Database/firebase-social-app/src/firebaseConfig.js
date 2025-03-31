import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzFRC3_0QO5jvB1tqIvE586ax00sQba5I",
    authDomain: "myapp-bee6f.firebaseapp.com",
    databaseURL: "https://myapp-bee6f-default-rtdb.firebaseio.com",
    projectId: "myapp-bee6f",
    storageBucket: "myapp-bee6f.firebasestorage.app",
    messagingSenderId: "390255967650",
    appId: "1:390255967650:web:e22c8f8775978b5fa846fb",
    measurementId: "G-M4KDY7MQEH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
