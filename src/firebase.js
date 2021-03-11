// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCQxHIcEDodOpEqbx5IugCMDAj68rowt2A",
  authDomain: "clone-75037.firebaseapp.com",
  projectId: "clone-75037",
  storageBucket: "clone-75037.appspot.com",
  messagingSenderId: "105116891008",
  appId: "1:105116891008:web:45584e6472c92e43e07365",
  measurementId: "G-6LC52PZ952"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
