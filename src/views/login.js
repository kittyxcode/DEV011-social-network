//hola
export function login(navigateTo) {
  const section = document.createElement("section");
  section.className = "sectionlogin";
  const imagen = document.createElement("img");
  imagen.className = "logo";
  const buttonCreate = document.createElement("button");
  const form = document.createElement("form");
  form.className= 'formlogin'
  const titleUser = document.createElement("h4");
  titleUser.className = "titleuser";
  const titlePass = document.createElement("h4");
  titlePass.className = "tirlepass";
  const inputUser = document.createElement("input");
  inputUser.className = "imputname";
  const inputPass = document.createElement("input");
  inputPass.className = "imputpass";
  const buttonLogin = document.createElement("button");
  const text = document.createElement("p");
  const googleLogo = document.createElement("img");
  googleLogo.className = "googleImg";

  imagen.src = "./img/logo.png";
  googleLogo.src = "./img/google.png";
  buttonLogin.textContent = "login";
  buttonCreate.textContent = "Create a New Account";
  buttonLogin.addEventListener("click", () => {
    navigateTo("/home");
  });
  buttonCreate.addEventListener("click", () => {
    navigateTo("/createAcount");
  });

  titleUser.textContent = "Username";
  titlePass.textContent = "Password";
  text.textContent = "Or login With";

  form.append( titleUser, inputUser,titlePass, inputPass, buttonLogin);
  section.append(
    imagen,
    form,
    buttonLogin,
    text,
    buttonCreate,
    googleLogo
  );
  return section;
}

export default login;
