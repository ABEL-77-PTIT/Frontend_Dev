// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSUmnNF50Izrct15A24G2zH3Dm94zYdaQ",
    authDomain: "anblog.firebaseapp.com",
    projectId: "anblog",
    storageBucket: "anblog.appspot.com",
    messagingSenderId: "423343140320",
    appId: "1:423343140320:web:df5a8bee2d264c5d6fcf85",
    measurementId: "G-KL03HFGTVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;