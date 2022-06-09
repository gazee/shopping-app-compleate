
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIkDMBgIcsbj3CPlb8qM_Ilal3bKJUeEk",
    authDomain: "e-commerce-6e1a0.firebaseapp.com",
    databaseURL: "https://e-commerce-6e1a0-default-rtdb.firebaseio.com",
    projectId: "e-commerce-6e1a0",
    storageBucket: "e-commerce-6e1a0.appspot.com",
    messagingSenderId: "966835169249",
    appId: "1:966835169249:web:23afc712af0b7c66aa94a0",
    measurementId: "G-YFLGHMMWXF"
  };

  //named export
//  export const Firebase=firebase.initilizeApp(firebaseConfig);

//default export
export default firebase.initializeApp(firebaseConfig);