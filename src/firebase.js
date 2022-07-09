// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA78_CYO7AcxJwMVBU_cJBp1CQXnsDIVCc",
  authDomain: "netflix-clone-full-71195.firebaseapp.com",
  projectId: "netflix-clone-full-71195",
  storageBucket: "netflix-clone-full-71195.appspot.com",
  messagingSenderId: "605077845870",
  appId: "1:605077845870:web:db040cdc09f17e8f7af37f",
  measurementId: "G-9SDRMJ8J37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
