// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDELqcYpeAdT14j122PrbULr4xfAFrfNKw",
    authDomain: "linkedin-clone-b12dc.firebaseapp.com",
    projectId: "linkedin-clone-b12dc",
    storageBucket: "linkedin-clone-b12dc.appspot.com",
    messagingSenderId: "385505323676",
    appId: "1:385505323676:web:638a9be0a4bca956425b59",
    measurementId: "G-JK8656BTH3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db,auth };
