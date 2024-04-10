
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkvWeQcMcE8hMPsqRzsj43sx281FCnLc",
  authDomain: "campuspool-3624f.firebaseapp.com",
  projectId: "campuspool-3624f",
  storageBucket: "campuspool-3624f.appspot.com",
  messagingSenderId: "761832885568",
  appId: "1:761832885568:web:21d5c4e0a303844a8d3ea5",
  measurementId: "G-606Z8Y98MQ",
  databaseURL:  "https://campuspool-3624f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };