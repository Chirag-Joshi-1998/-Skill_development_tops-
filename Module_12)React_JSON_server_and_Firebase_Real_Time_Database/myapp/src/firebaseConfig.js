// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzFRC3_0QO5jvB1tqIvE586ax00sQba5I",
  authDomain: "myapp-bee6f.firebaseapp.com",
  projectId: "myapp-bee6f",
  storageBucket: "myapp-bee6f.firebasestorage.app",
  messagingSenderId: "390255967650",
  appId: "1:390255967650:web:e22c8f8775978b5fa846fb",
  measurementId: "G-M4KDY7MQEH",
  databaseURL:'https://myapp-bee6f-default-rtdb.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
