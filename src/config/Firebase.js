import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDxY7v7BJ0CbH27rdzzggsUXgloMtZzK1s",
    authDomain: "resturant-b0515.firebaseapp.com",
    projectId: "resturant-b0515",
    storageBucket: "resturant-b0515.appspot.com",
    messagingSenderId: "767665577793",
    appId: "1:767665577793:web:4ea9ef59cb3fb29d1b0bc0"
}
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


  export const auth = firebase.auth();