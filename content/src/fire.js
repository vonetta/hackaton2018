import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCOyq93cUxC24T5g7x42VH8S5Zz-Ny5s8w",
    authDomain: "chime-in-6c0a9.firebaseapp.com",
    databaseURL: "https://chime-in-6c0a9.firebaseio.com",
    projectId: "chime-in-6c0a9",
    storageBucket: "chime-in-6c0a9.appspot.com",
    messagingSenderId: "107868534070"
};
var fire = firebase.initializeApp(config);
export default fire;
