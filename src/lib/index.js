/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../firebase';
import { db, collection, addDoc, getDocs, onSnapshot } from '../firestore';

const postCollection = collection(db, 'post');

export const createPost = (comment) => {
  addDoc(postCollection, {
    comment,
  });
};

export const querySnapshot = getDocs(postCollection);

// eslint-disable-next-line arrow-body-style
export const crearUsuarioConCorreoYContrasena = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// eslint-disable-next-line arrow-body-style
export const ingresoUsuarioExistente = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// eslint-disable-next-line arrow-body-style
export const correoValidacion = () => {
  return sendEmailVerification(auth.currentUser);
};

const provider = new GoogleAuthProvider();
export const iniciarConGoogle = () => {
  return signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    return token;
  });
};
