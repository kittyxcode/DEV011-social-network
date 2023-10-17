export function createAcount(navigateTo) {
  const section = document.createElement('section');
  const imagen = document.createElement('img');
  const email = document.createElement('h4');
  const titleUser = document.createElement('h4');
  const titlePass = document.createElement('h4');
  const buttonBack = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputUser = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonSingUp = document.createElement('button');

  imagen.src = '/srcimgLogo___2_-removebg-preview (1).png';
  buttonSingUp.textContent = 'SingUp';
  buttonSingUp.addEventListener('click', () => {
    navigateTo('/views/home');
  });

  buttonBack.addEventListener('click', () => {
    navigateTo('/views/login');
  });

  email.textContent = 'Enter Email Id';
  titleUser.textContent = 'Create User Name';
  titlePass.textContent = 'Create Password';

  form.append(inputUser, inputPass, inputEmail, buttonSingUp);
  section.append(titleUser, titlePass, form, email, buttonBack);
  return section;
}

export default createAcount;
