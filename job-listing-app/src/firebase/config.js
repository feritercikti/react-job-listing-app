import app from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
  .....
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
