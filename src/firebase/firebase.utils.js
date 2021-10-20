import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAIE3Bb3CZ_HLN4PxrpkaoGSXILSARNfkU",
  authDomain: "crwn-db-b27c0.firebaseapp.com",
  projectId: "crwn-db-b27c0",
  storageBucket: "crwn-db-b27c0.appspot.com",
  messagingSenderId: "955684122854",
  appId: "1:955684122854:web:ee6afed0806690d9af4b27",
  measurementId: "G-3HKGRB1MPW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
