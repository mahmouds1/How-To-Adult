// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoqz-t-v46hOeR0LgLCKgzfZlZEGZlbDM",
    authDomain: "how-to-adultv2.firebaseapp.com",
    projectId: "how-to-adultv2",
    storageBucket: "how-to-adultv2.appspot.com",
    messagingSenderId: "1024598055817",
    appId: "1:1024598055817:web:45f1e1be15222787851f58",
    measurementId: "G-80778E0ZDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/*dont need this auth code*/
/**
const auth = getAuth(firebaseApp);
//const db = getFireStore(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null){
        consol.log('logged in!');
    } else {
        console.log('no user!');
    }
});
**/
//detect auth state
/**
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);**/
