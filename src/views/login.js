import { ingresoUsuarioExistente, iniciarConGoogle } from '../lib';

export function login(navigateTo) {
  const section = document.createElement('section');
  section.className = 'sectionlogin';
  const imagen = document.createElement('img');
  imagen.className = 'logo';
  const buttonCreate = document.createElement('p');
  buttonCreate.className = 'createAccount';
  const form = document.createElement('form');
  form.className = 'formlogin';
  const titleUser = document.createElement('h4');
  titleUser.className = 'titleuser';
  const titlePass = document.createElement('h4');
  titlePass.className = 'tirlepass';
  const inputUser = document.createElement('input');
  inputUser.className = 'imputname';
  inputUser.id = 'inputUserError';
  inputUser.type = 'email';
  const spanErrorUser = document.createElement('span');
  spanErrorUser.id = 'spanErrorUserStyle';
  spanErrorUser.textContent = 'error por defecto';
  const inputPass = document.createElement('input');
  inputPass.className = 'imputpass';
  inputPass.type = 'password';
  const spanErrorPass = document.createElement('span');
  spanErrorPass.id = 'spanErrorPassStyle';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'claseLogin';
  const text = document.createElement('p');
  text.className = 'textp';
  const googleLogo = document.createElement('img');
  googleLogo.className = 'googleImg';

  imagen.src = './img/logo.png';
  googleLogo.src = './img/google.png';

  googleLogo.addEventListener('click', (e) => {
    e.preventDefault();
    iniciarConGoogle().then(() => {
      navigateTo('/home');
    });
  });

  buttonLogin.textContent = 'Login';
  buttonCreate.textContent = 'Create a New Account';
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    ingresoUsuarioExistente(inputUser.value, inputPass.value)
      .then(() => {
        navigateTo('/home');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          spanErrorUser.textContent = 'Your email is not valid';
          spanErrorUser.style.visibility = 'visible';
        }
        if (error.code === 'auth/invalid-login-credentials') {
          spanErrorPass.textContent = 'Incorrect password';
          spanErrorPass.style.visibility = 'visible';
        }
        if (error.code === 'auth/invalid-login-credentials') {
          spanErrorUser.textContent = 'Your information is not valid';
          spanErrorPass.style.visibility = 'visible';
        }
        // if (error.code) {
        //   spanErrorPass.textContent= "error";
        // }
      });
  });
  inputUser.addEventListener('input', (e) => {
    e.preventDefault();
    if (inputUser.validity.valid) {
      inputUser.innerHTML = '';
    }
  });

  buttonCreate.addEventListener('click', () => {
    navigateTo('/createAcount');
  });

  titleUser.textContent = 'Username';
  titlePass.textContent = 'Password';
  text.textContent = 'Or login With';

  form.append(
    titleUser,
    inputUser,
    spanErrorUser,
    titlePass,
    inputPass,
    spanErrorPass,
    buttonLogin,
  );
  section.append(imagen, form, buttonLogin, text, googleLogo, buttonCreate);

  return section;
}

export default login;
