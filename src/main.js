// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();


import {login} from './view.js';

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
//   { path: '/error', component: error },
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
    }

    root.appendChild(route.component(navigateTo));
   } else {navigateTo('/');}
    

}
  


window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname);