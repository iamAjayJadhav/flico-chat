// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARtRk-JTkIjInDjC5VVS3ZBb_5Gj633zg",
  authDomain: "flico-chat.firebaseapp.com",
  projectId: "flico-chat",
  storageBucket: "flico-chat.appspot.com",
  messagingSenderId: "640635734396",
  appId: "1:640635734396:web:5880aedd623db3b5c0bcf9",
  measurementId: "G-TT9L6G7K7S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
