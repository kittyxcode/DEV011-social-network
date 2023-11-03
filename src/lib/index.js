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
  updateDoc,
} from '../firestore';
import { async } from 'regenerator-runtime';
import { documentId } from 'firebase/firestore';

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

// Agrega un observador para el estado de autenticación
export const userAuth = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('idUser', user.uid);
        console.log('Usuario autenticado:', user);

        resolve(user);
      } else {
        console.log('Ningún usuario autenticado');
        resolve('medio fail');
      }
    });
  });
};

export const deleteComment = (documentId) => {
  deleteDoc(doc(db, 'post', documentId));
};

export const editarComment = (documentId, comment) => {
  const washingtonRef = doc(db, 'post', documentId);
  updateDoc(washingtonRef, {
    comment:comment, 
  });
};

// export const deletePostUser = () => {
//   userAuth()
//   .then((userID)) => {
//     if (userID)
//     postCollection
//   }
// }

const postCollection = collection(db, 'post');

export const createPost = (comment) => {
  const idUser = localStorage.getItem('idUser');
  console.log({ idUser });

  addDoc(postCollection, {
    comment,
    date: Date.now(),
    userId: idUser,
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
