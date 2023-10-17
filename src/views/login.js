//hola
export function login(navigateTo) {
  const section = document.createElement('section');
  const imagen = document.createElement('img');

        imagen.className = 'logo'
  const titleUser = document.createElement('h4');
  const titlePass = document.createElement('h4');
  const buttonCreate = document.createElement('button');

  const form = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const text = document.createElement('p');
  const googleLogo = document.createElement('img');

  googleLogo.className = 'googleImg'

  imagen.src = './img/logo.png';
  googleLogo.src = './img/google.png';
  buttonLogin.textContent = 'login';
  buttonCreate.textContent = 'Create a New Account';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/home');
  });
  buttonCreate.addEventListener('click', () => {
    navigateTo('/createAcount');

  });

  titleUser.textContent = 'Username';
  titlePass.textContent = 'Password';
  text.textContent = 'Or login With';

  form.append(inputUser, inputPass, buttonLogin);

  section.append(imagen,titleUser, titlePass, form, buttonLogin,text, buttonCreate, googleLogo);

  return section;
}

export default login;
