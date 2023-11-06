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
  arrayUnion,
  arrayRemove,
  getDoc,
} from '../firestore';

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
    comment: comment,
  });
};

export const darLike = async (documentId, userId) => {
  const docRef = doc(db, 'post', documentId);

  try {
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const docData = snapshot.data();
      const likes = docData.likes || [];

      if (!likes.includes(userId)) {
        // El usuario no ha dado like, así que dar el like
        await updateDoc(docRef, {
          likes: arrayUnion(userId),
        });
        console.log('Like agregado exitosamente.');
      } else {
        console.log('El usuario ya dio like previamente.');
      }
    } else {
      console.log('El documento no existe.');
    }
  } catch (error) {
    console.error('Error al dar like:', error);
  }
};

export const quitarLike = async (documentId, userId) => {
  const docRef = doc(db, 'post', documentId);

  try {
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const docData = snapshot.data();
      const likes = docData.likes || [];

      if (likes.includes(userId)) {
        // El usuario ya ha dado like, así que quitar el like
        await updateDoc(docRef, {
          likes: arrayRemove(userId),
        });
        console.log('Like eliminado exitosamente.');
      } else {
        console.log('El usuario no dio like previamente.');
      }
    } else {
      console.log('El documento no existe.');
    }
  } catch (error) {
    console.error('Error al quitar like:', error);
  }
};

export const verificarLikes = async (documentId) => {
  // Obtén el ID del usuario actual
  const userId = localStorage.getItem('idUser'); // Reemplaza con la forma correcta de obtener el ID del usuario

  // Aquí necesitas obtener el documento correspondiente al elemento imgLike
  const docRef = doc(db, 'post', documentId);

  // Luego, obtén el documento actualizado
  await getDoc(docRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const docData = snapshot.data();
        const likes = docData.likes || [];

        if (likes.includes(userId)) {
          // El usuario ya ha dado like, así que quitar el like
          quitarLike(documentId, userId);
        } else {
          // El usuario no ha dado like, así que dar el like
          darLike(documentId, userId);
        }
      } else {
        console.log('El documento no existe.');
      }
    })
    .catch((error) => {
      console.error('Error al obtener el documento:', error);
    });
};

const postCollection = collection(db, 'post');

export const createPost = (comment) => {
  const idUser = localStorage.getItem('idUser');
  console.log({ idUser });

  addDoc(postCollection, {
    comment,
    date: Date.now(),
    userId: idUser,
    likes: [],
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
