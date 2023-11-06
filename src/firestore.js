import {
  getFirestore,
  addDoc,
  collection,
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
} from 'firebase/firestore';
import { app } from './firebase';

export const db = getFirestore(app);

export { collection, addDoc, getDocs, onSnapshot, orderBy, query, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove, getDoc };
