import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCULJShl3VKH4cHylLVD6iv-skmkGO0jdw",
  authDomain: "clone-81dcc.firebaseapp.com",
  databaseURL: "https://clone-81dcc.firebaseio.com",
  projectId: "clone-81dcc",
  storageBucket: "clone-81dcc.appspot.com",
  messagingSenderId: "706065080684",
  appId: "1:706065080684:web:1fd323621ba927e73a5349",
  measurementId: "G-YRCLKNTWPD"
});


// const db=firebaseApp.firestore()
const auth = firebase.auth();

export {auth};