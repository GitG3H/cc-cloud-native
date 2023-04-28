import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClueRLNB3-wIhawmXqDru5KVMF28_3i_A",
  authDomain: "cloud-native-chat.firebaseapp.com",
  projectId: "cloud-native-chat",
  storageBucket: "cloud-native-chat.appspot.com",
  messagingSenderId: "1099477711985",
  appId: "1:1099477711985:web:4b3078d38f0e7348582fd0",
  measurementId: "G-G4Y8FV8C2N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
