import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXLoSmZ-EpLPMkrtpdQWRaFgQHyLPErSU",
  authDomain: "linkedin-clone-yt-e0d80.firebaseapp.com",
  projectId: "linkedin-clone-yt-e0d80",
  storageBucket: "linkedin-clone-yt-e0d80.appspot.com",
  messagingSenderId: "937208870323",
  appId: "1:937208870323:web:d7d25ee4fcc49ab3cb87c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };