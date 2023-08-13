// Import the functions you need from the SDKs you need
 import *as firebase from "firebase";
import { initializeApp } from "firebase/app";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHRUyWLk400H_qsLdcOPH4uAnKudytubM",
  authDomain: "fir-auth132.firebaseapp.com",
  projectId: "fir-auth132",
  storageBucket: "fir-auth132.appspot.com",
  messagingSenderId: "495352211665",
  appId: "1:495352211665:web:bf07e88b029443ca863df0"
};
// let app  ;
// if(firebase.apps.length == 0 ){
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }

const auth = firebase.auth()

export {auth}
 