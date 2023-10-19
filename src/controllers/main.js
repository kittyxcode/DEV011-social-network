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
  // { path: '/login.js', component: login },
  { path: '/error.js', component: error },
  { path: '/createAcount', component: createAcount },
  { path: '/home', component: home },
];

const defaultRoute = "/";
const root = document.getElementById("root");


function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,

      window.location.origin + route.path

    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);

    }
    root.appendChild(route.component(navigateTo));
  } else if (hash !== '/error') {
    navigateTo("/error");

  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
