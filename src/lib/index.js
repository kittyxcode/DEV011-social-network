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
import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  doc,
  deleteDoc,
} from '../firestore';

// Agrega un observador para el estado de autenticación
/* export const userAuth = auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('Usuario autenticado:', user.displayName);
    return user.displayName;
  } else {
    console.log('Ningún usuario autenticado');
    return 'medio fail';
  }
}); */

export const deleteComment = (documentId) => {
  deleteDoc(doc(db, "post", documentId));

};

// Agrega un observador para el estado de autenticación
export const userAuth = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Usuario autenticado:', user.displayName);
        resolve(user.displayName);
      } else {
        console.log('Ningún usuario autenticado');
        resolve('medio fail');
      }
    });
  });
};


console.log(auth.currentUser);

const postCollection = collection(db, 'post');

export const createPost = (comment) => {
  addDoc(postCollection, {
    comment,
    date: Date.now(),
  });
};

const orden = query(postCollection, orderBy('date', 'desc'));

export const querySnapshot = getDocs(postCollection);

export const renderPostRealTime = (callback) => onSnapshot(orden, callback);

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
