//hola
export function login(navigateTo) {
  const section = document.createElement('section');
  const imagen = document.createElement('img');
  const titleUser = document.createElement('h4');
  const titlePass = document.createElement('h4');
  const form = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const text = document.createElement('p');
  const googleLogo = document.createElement('img');
  const buttonCreate = document.createElement('button');

  imagen.src = '/img/Logo___2_-removebg-preview (1).png';
  googleLogo.src = '/img/Logo___2_-removebg-preview (1).png';
  buttonLogin.textContent = 'login';
  buttonCreate.textContent = 'Create a New Account';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/views/home');
  });
  buttonCreate.addEventListener('click', () => {
    navigateTo('/views/createAcount');
  });

  titleUser.textContent = 'Username';
  titlePass.textContent = 'Password';
  text.textContent = 'Or login With';

  form.append(inputUser, inputPass, buttonLogin);
  section.append(titleUser, titlePass, form, buttonLogin, buttonCreate);
  return section;
}

export default login;
