import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrO-jq0mqbG-aHI1sL1ceeEVOKOnktAlE",
    authDomain: "quiztest-auth.firebaseapp.com",
    projectId: "quiztest-auth",
    storageBucket: "quiztest-auth.appspot.com",
    messagingSenderId: "406421048459",
    appId: "1:406421048459:web:ea3655ea7d278fdafe588e",
};

// To help us with debugging later!
if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId)
    throw new Error("Missing firebase credential: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };