import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiF-dIvD_VsB1FVBM24grw0hvhYKFc1Es",
    authDomain: "drive-clone-night.firebaseapp.com",
    projectId: "drive-clone-night",
    storageBucket: "drive-clone-night.appspot.com",
    messagingSenderId: "462346143741",
    appId: "1:462346143741:web:b18a36da6e6352076afb94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }