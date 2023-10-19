// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const crearUsuarioConCorreoYContrasena = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
