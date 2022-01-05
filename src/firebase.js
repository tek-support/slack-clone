import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBULB_P6mv8v0GW6CYfxK7FV69Bw8e4iIU",
  authDomain: "signal-clone-yt-e6003.firebaseapp.com",
  projectId: "signal-clone-yt-e6003",
  storageBucket: "signal-clone-yt-e6003.appspot.com",
  messagingSenderId: "136673538297",
  appId: "1:136673538297:web:895cd0aee3c3be8bc47228",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
