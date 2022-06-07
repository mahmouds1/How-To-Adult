// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrknIUPr7hgnqpxJxmgYwdIJbjHNfppGs",
  authDomain: "how-to-adult-a4e2d.firebaseapp.com",
  databaseURL: "https://how-to-adult-a4e2d-default-rtdb.firebaseio.com",
  projectId: "how-to-adult-a4e2d",
  storageBucket: "how-to-adult-a4e2d.appspot.com",
  messagingSenderId: "543048609168",
  appId: "1:543048609168:web:f7b2178458c95ca9091715",
  measurementId: "G-VVV9XLRCBG"
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