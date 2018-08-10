import firebase from 'src/app_init/firebase';

const firestore = firebase.firestore();
const firestoreSettings = {
  timestampsInSnapshots: true
};
firestore.settings(firestoreSettings);

export default firestore;
