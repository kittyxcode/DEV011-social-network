import { auth } from "../firebase";
import { crearUsuarioConCorreoYContrasena, correoValidacion } from "../lib";

export function createAcount(navigateTo) {
  const section = document.createElement("section");
  section.className = "sectionlogin";
  const imagen = document.createElement("img");
  imagen.className = "logo";
  const email = document.createElement("h4");
  const titleUser = document.createElement("h4");
  titleUser.className = "titleuser";
  const titlePass = document.createElement("h4");
  titlePass.className = "tirlepass";
  const buttonBack = document.createElement("img");
  buttonBack.className= "buttonBack"
  const form = document.createElement("form");
  form.className = "formlogin";
  const inputEmail = document.createElement("input");
  inputEmail.className = "imputname";
  const inputPass = document.createElement("input");
  inputPass.className = "imputpass";
  const buttonSingUp = document.createElement("button");

  imagen.src = "./img/logo.png";
  inputPass.type = "password";
  buttonBack.src= "./img/fleachaatras.png"
  buttonBack.addEventListener('click', () => {
    navigateTo("/");
  })
  buttonSingUp.textContent = "Sing Up";
  buttonSingUp.addEventListener("click", (e) => {
    e.preventDefault();
    crearUsuarioConCorreoYContrasena(inputEmail.value, inputPass.value)
      .then(() => {
        correoValidacion().then(()=>{
          alert("Cuenta Creada");
        navigateTo("/");
        });
        
      })

      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("Your email is not valid");
        }
        if (error.code === "auth/weak-password") {
          alert("Password should be at least 6 characters");
        }
        if (error.code === "auth/email-already-in-use") {
          alert(error);
        }
        if (error.code) {
          alert(error);
        }
      });
  });

  email.textContent = "Enter Email Id";
  titleUser.textContent = "Create User Name";
  titlePass.textContent = "Create Password";

  form.append(email, inputEmail, titlePass, inputPass, );

  section.append(buttonBack, imagen, form, buttonSingUp, );

  return section;
}

export default createAcount;
