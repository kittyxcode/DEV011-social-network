// aqui exportaras las funciones que necesites
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase';

export const crearUsuarioConCorreoYContrasena = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const ingresoUsuarioExistente =(email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const correoValidacion = () =>{
  return sendEmailVerification(auth.currentUser)
}
