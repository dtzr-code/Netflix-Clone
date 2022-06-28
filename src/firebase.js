import firebase from "firebase";

//need a config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix2-clone-e95d8.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore() is a real-time database which allow us to keep track of what the user subscription is
const db = firebaseApp.firestore();
const auth = firebase.auth();

//we can only have one default export but many explicit export
export { auth };
export default db;
