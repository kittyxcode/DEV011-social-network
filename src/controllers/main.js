// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from "./lib/index.js";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore"; */

//myFunction();

import { login } from '../views/login.js';
import { createAcount } from '../views/createAcount.js';
import { error } from '../views/error.js';
import { home } from '../views/home.js';

const routes = [
  { path: '/', component: login },
  { path: '/views/login.js', component: login },
  { path: '/views/error.js', component: error },
  { path: '/views/createAcount', component: createAcount },
  { path: '/views/home', component: home },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
      root.appendChild(root.firstChild);
      navigateTo('/views/home');
      root.appendChild(route.component(navigateTo('/views/home')));
    }

    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/view/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

console.log(navigateTo('/views/login'));

/* const firebaseApp = initializeApp({
  apiKey: "AIzaSyA8-Scf_mqMNockCk0Q9ah1k5eUg09sBko",
  authDomain: "maryapp-011.firebaseapp.com",
  projectId: "maryapp-011",
  storageBucket: "maryapp-011.appspot.com",
  messagingSenderId: "509419977388",
  appId: "1:509419977388:web:75a84feb0b65a846fcfd09",
  measurementId: "G-LPCHT81NTD",
});

firebase.initializeApp(firebaseApp);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

document.querySelector(".blabla").addEventListener("click", (e) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('holahola');
    });
}); */
