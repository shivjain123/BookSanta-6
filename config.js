import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBnMxuDjI4BZ7De5n1CUD6LosqmHgutEHI",
  authDomain: "book-santa-5bfeb.firebaseapp.com",
  projectId: "book-santa-5bfeb",
  storageBucket: "book-santa-5bfeb.appspot.com",
  messagingSenderId: "248121807395",
  appId: "1:248121807395:web:784d09817dd699bd86d796"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
