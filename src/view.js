
export function login(navigateTo) {
    const section = document.createElement('section');
    const imagen =  document.createElement('img')
    const titleUser = document.createElement('h4');
    const titlePass = document.createElement('h4');
    const form = document.createElement('form'); 
    const inputUser = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const text = document.createElement('p');
    const googleLogo = document.createElement('img');
    const buttonCreate = document.createElement('button');
    
    imagen.src = '/src\img\Logo___2_-removebg-preview (1).png'
    googleLogo.src = 'src\img\google.png' 
    buttonLogin.textContent = 'login';
    buttonCreate.textContent = 'Create a New Account'
    buttonLogin.addEventListener('click', () => {
      navigateTo('/muro');
    });
    buttonCreate.addEventListener ('click', ()=>{
      navigateTo('/create')

    });
    
    titleUser.textContent = 'Username';
    titlePass.textContent = 'Password';
    text.textContent = 'Or login With'

    
    form.append(inputUser, inputPass, buttonLogin);
    section.append(titleUser, titlePass, form, buttonLogin, buttonCreate);
  
  }
  
  export default login;

