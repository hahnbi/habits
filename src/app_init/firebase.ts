import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from 'src/config/firebase_config';

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const firestoreSettings = {
  timestampsInSnapshots: true
};
firestore.settings(firestoreSettings);

export default firestore;
