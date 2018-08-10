//tslint:disable
import db from 'src/app_init/firestore';

const UserService = {
  addUser() {
    db.collection('users').add({
      firstName: 'Hahnbi',
      lastName: 'Sun',
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }
}

export default UserService;
