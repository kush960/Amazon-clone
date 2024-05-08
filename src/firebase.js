import React from 'react';
import firebase from "firebase"

const firebaseConfig = {
    //This code is a copied from firebase>amazon>setting>Firebase SDK snippet>config>copy the code
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,  
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESUREMENT_ID,

}
const firebaseApp = firebase.initializeApp(firebaseConfig);
// no db needed now...we only want to login(auth)   
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// after this install depedencies
//npm i firebase
