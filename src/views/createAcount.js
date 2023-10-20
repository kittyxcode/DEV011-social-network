import { auth } from '../firebase';
import { crearUsuarioConCorreoYContrasena, correoValidacion } from '../lib';

export function createAcount(navigateTo) {
  const section = document.createElement('section');
  const imagen = document.createElement('img');
  const email = document.createElement('h4');
  const titleUser = document.createElement('h4');
  const titlePass = document.createElement('h4');
  const buttonBack = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonSingUp = document.createElement('button');


  imagen.src = './img/logo.png';
  inputPass.type= 'password'
  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.addEventListener('click', (e) => {
    e.preventDefault();
    crearUsuarioConCorreoYContrasena(inputEmail.value, inputPass.value)
      .then(() => {
        correoValidacion()
        alert('Cuenta Creada');
        navigateTo('/');
      })
      .catch((error) => {
        console.error('Error al crear la cuenta:', error);
        // Puedes mostrar un mensaje de error al usuario si es necesario.
      });

 });

  email.textContent = 'Enter Email Id';
  titleUser.textContent = 'Create User Name';
  titlePass.textContent = 'Create Password';

  form.append(email, inputEmail,titlePass,inputPass, buttonSingUp);

  section.append(imagen,  form,  buttonBack);

  return section;
}

export default createAcount;
