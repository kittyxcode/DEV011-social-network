// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8-Scf_mqMNockCk0Q9ah1k5eUg09sBko',
  authDomain: 'maryapp-011.firebaseapp.com',
  projectId: 'maryapp-011',
  storageBucket: 'maryapp-011.appspot.com',
  messagingSenderId: '509419977388',
  appId: '1:509419977388:web:75a84feb0b65a846fcfd09',
  measurementId: 'G-LPCHT81NTD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);