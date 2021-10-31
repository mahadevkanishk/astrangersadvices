import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAyTTVqIFocXV7Vdc40QrKDWAEOCrE-KDM",
	authDomain: "justtalk-cbff6.firebaseapp.com",
	projectId: "justtalk-cbff6",
	storageBucket: "justtalk-cbff6.appspot.com",
	messagingSenderId: "248115941293",
	appId: "1:248115941293:web:20d2dd0bfd2da15a131b24",
	measurementId: "G-G5FP3GKWGC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
