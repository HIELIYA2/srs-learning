import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyAnad93GjMwy1Qf_h9lpnWAcE0GeNzRaRU',
    authDomain: 'borsood-46e4f.firebaseapp.com',
    databaseURL: 'https://borsood-46e4f.firebaseio.com',
    projectId: 'borsood-46e4f',
    storageBucket: 'borsood-46e4f.appspot.com',
    messagingSenderId: '956430753068',
    appId: '1:956430753068:web:41d8eee4ecd4657a4b2089',
    measurementId: 'G-MFJ9J5K6XY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
