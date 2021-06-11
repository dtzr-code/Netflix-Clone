import firebase from 'firebase'
require('dotenv').config({path:"/Users/dtzr/Documents/GitHub/netflix-clone/.env"});

//need a config
const firebaseConfig = {
  apiKey: 'AIzaSyCYj-nO_6jG-SudmEClm30fT6d6haqQPCM',
  authDomain: "netflix2-clone-e95d8.firebaseapp.com",
  projectId: "netflix2-clone-e95d8",
  storageBucket: "netflix2-clone-e95d8.appspot.com",
  messagingSenderId: "373441766595",
  appId: "1:373441766595:web:7839bae3756a7734856e76"
};
console.log(process.env)

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore() is a real-time database which allow us to keep track of what the user subscription is
const db = firebaseApp.firestore();
const auth = firebase.auth();

//we can only have one default export but many explicit export
export {auth};
export default db; 