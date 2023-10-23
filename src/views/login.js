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
  inputUser.id = "inputUserError";
  inputUser.type = "email";
  const spanErrorUser = document.createElement("span");
  spanErrorUser.id = "spanErrorUserStyle";
  const inputPass = document.createElement("input");
  inputPass.className = "imputpass";
  inputPass.type = "password";
  const spanErrorPass = document.createElement("span");
  spanErrorPass.id = "spanErrorPassStyle";
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
        console.log(error.code)
        if (error.code === "auth/invalid-email") {
          spanErrorUser.textContent= "Your email is not valid";
        }
        if (error.code === "auth/invalid-login-credentials") {
          spanErrorPass.textContent ="Incorrect password";
        }
        if (error.code === "auth/invalid-login-credentials") {
          spanErrorUser.textContent = "Your information is not valid";
        }
        // if (error.code) {
        //   spanErrorPass.textContent= "error";
        // }
      });
  });
  inputUser.addEventListener("input", (e) => {
    e.preventDefault();
    if (inputUser.validity.valid) {
    inputUser.innerHTML= "";
    //inputUser.className= "error";
  } else {
    showError;
    console.log (showError);
  }
});
buttonLogin.addEventListener("click", function (event) {
  if (!inputUser.validity.valid) {
    showError();
    event.preventDefault();
  }
});
// function showError() {
//   if (inputUser.validity.valueMissing) {
//     // Si el campo está vacío
//     // muestra el mensaje de error siguiente.
//     spanErrorUser.textContent =
//       "Debe introducir una dirección de correo electrónico.";
//   } else if (inputUser.validity.typeMismatch) {
//     // Si el campo no contiene una dirección de correo electrónico
//     // muestra el mensaje de error siguiente.
//     spanErrorUser.textContent =
//       "El valor introducido debe ser una dirección de correo electrónico.";
//   } else if (inputUser.validity.tooShort) {
//     // Si los datos son demasiado cortos
//     // muestra el mensaje de error siguiente.
//     spanErrorUser.textContent =
//       "El correo electrónico debe tener al menos ${ inputUser.minLength } caracteres; ha introducido ${ inputUser.value.length }.";
//   }

//   // Establece el estilo apropiado
//   spanErrorUser.className = "error activo";
//}


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

  form.append(titleUser, inputUser, spanErrorUser, titlePass, inputPass, spanErrorPass, buttonLogin);
  section.append(imagen, form, buttonLogin, text, googleLogo, buttonCreate);

  return section;
}

export default login;
