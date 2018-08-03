import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZdVgrs2ph6QWvvZeGE_tvLB0oNGY58B8",
  authDomain: "habits-d75c7.firebaseapp.com",
  databaseURL: "https://habits-d75c7.firebaseio.com",
  messagingSenderId: "1017321898636",
  projectId: "habits-d75c7",
  storageBucket: "habits-d75c7.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const firestoreSettings = {
  timestampsInSnapshots: true
};
firestore.settings(firestoreSettings);

export default firestore;
