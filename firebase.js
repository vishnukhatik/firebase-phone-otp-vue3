import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import "firebase/compat/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCQOrqb7H2VEo0SYJbt2M3ZcWa2lf0OdVw",
  authDomain: "pillbox-55f2b.firebaseapp.com",
  projectId: "pillbox-55f2b",
  storageBucket: "pillbox-55f2b.appspot.com",
  messagingSenderId: "767681472489",
  appId: "1:767681472489:web:0ae9dd1baf3ec7f5350d78",
  measurementId: "G-FJLFR9M713",
  services: {
    auth: true,
  },
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
