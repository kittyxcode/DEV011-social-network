import { login } from '../views/login.js';
import { createAcount } from '../views/createAcount.js';
import { error } from '../views/error.js';
import { home } from '../views/home.js';
import { post } from '../views/post.js';

const routes = [
  { path: '/', component: login },
  { path: '/error.js', component: error },
  { path: '/createAcount', component: createAcount },
  { path: '/home', component: home },
  { path: '/post', component: post}
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
  } else if (hash !== '/error') {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
