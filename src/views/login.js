import { auth } from "../firebase";
import { ingresoUsuarioExistente, iniciarConGoogle } from "../lib";

export function login(navigateTo) {
  const section = document.createElement("section");
  section.className = "sectionlogin";
  const imagen = document.createElement("img");
  imagen.className = "logo";
  const buttonCreate = document.createElement("p");
  buttonCreate.className = "createAccount";
  const form = document.createElement("form");
  form.className = "formlogin";
  const titleUser = document.createElement("h4");
  titleUser.className = "titleuser";
  const titlePass = document.createElement("h4");
  titlePass.className = "tirlepass";
  const inputUser = document.createElement("input");
  inputUser.className = "imputname";
  const inputPass = document.createElement("input");
  inputPass.className = "imputpass";
  inputPass.type = "password";
  const buttonLogin = document.createElement("button");
  const text = document.createElement("p");
  text.className = "textp";
  const googleLogo = document.createElement("img");
  googleLogo.className = "googleImg";

  imagen.src = "./img/logo.png";
  googleLogo.src = "./img/google.png";
  googleLogo.addEventListener("click", (e) => {
    e.preventDefault();
    iniciarConGoogle()
      .then((result) => {
        alert("Cuenta Creada");
        navigateTo("/home");
      })
      .catch((error) => {
        if (error.code) {
          alert(error);
        }
      });
  });

  buttonLogin.textContent = "Login";
  buttonCreate.textContent = "Create a New Account";
  buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    ingresoUsuarioExistente(inputUser.value, inputPass.value)
      .then(() => {
        alert("Cuenta Creada");
        navigateTo("/home");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("Your email is not valid");
        }
        if (error.code === "auth/invalid-login-credentials") {
          alert("Incorrect password");
        }
        if (error.code === "auth/invalid-login-credentials") {
          alert("Your information is not valid");
        }
        if (error.code) {
          alert(error);
        }
      });
  });

  auth.onAuthStateChanged((user) => {
    if (user && !user.emailVerified) {
      console.log("User's email is not verified.");
    } else {
      // El usuario ha iniciado sesión y su correo está verificado o no ha iniciado sesión.
    }
  });

  buttonCreate.addEventListener("click", () => {
    navigateTo("/createAcount");
  });

  titleUser.textContent = "Username";
  titlePass.textContent = "Password";
  text.textContent = "Or login With";

  form.append(titleUser, inputUser, titlePass, inputPass, buttonLogin);
  section.append(imagen, form, buttonLogin, text, googleLogo, buttonCreate);

  return section;
}

export default login;
