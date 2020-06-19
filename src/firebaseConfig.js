// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClAvRZNa4VxC8lMeGwOVfZxrHAXd9m5eM",
    authDomain: "redaifis.firebaseapp.com",
    databaseURL: "https://redaifis.firebaseio.com",
    projectId: "redaifis",
    storageBucket: "redaifis.appspot.com",
    messagingSenderId: "641655259403",
    appId: "1:641655259403:web:fd6ea85df2778841a2620e",
    measurementId: "G-4ZYQDPSZVN"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);