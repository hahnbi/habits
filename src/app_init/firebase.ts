import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from 'src/config/firebase_config';

firebase.initializeApp(firebaseConfig);

export default firebase;
