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


  imagen.src = './img/logo.png';
  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.addEventListener('click', () => {
    navigateTo('/home');
  });
  buttonBack.textContent ='<-'
  buttonBack.addEventListener('click', () => {
    navigateTo('/');

  });

  email.textContent = 'Enter Email Id';
  titleUser.textContent = 'Create User Name';
  titlePass.textContent = 'Create Password';

  form.append(inputUser, inputPass, inputEmail, buttonSingUp);

  section.append(imagen,titleUser, titlePass, form, email, buttonBack);

  return section;
}

export default createAcount;
