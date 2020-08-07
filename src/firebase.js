import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9kahPh2WQ_l4gPSlCemc1LBYvoL32F98",
  authDomain: "mytiktokclone.firebaseapp.com",
  databaseURL: "https://mytiktokclone.firebaseio.com",
  projectId: "mytiktokclone",
  storageBucket: "mytiktokclone.appspot.com",
  messagingSenderId: "1068305526542",
  appId: "1:1068305526542:web:408fd8b0aa4f130497f15f",
  measurementId: "G-8BLKE1TGG3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;