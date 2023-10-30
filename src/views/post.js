import { createPost, querySnapshot, renderPostRealTime } from '../lib/index.js';
import { userAuth } from '../lib/index.js';

export function post(navigateTo) {
    const container = document.createElement("div");
    container.className = "container";
  
    // Crear el contenido HTML
    const html = `
      <div class="wrapper">
        <section class="post">
          <header>Create Post</header>
          <form action="#">
            <div class="content">
              <img src="icons/logo.svg" alt="logo">
              <div class="details">
                <p id='userName'>CodingNepal</p>
                <div class="privacy">
                  <i class="fas fa-user-friends"></i>
                  <span>Friends</span>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </div>
            <textarea placeholder="What's on your mind?" spellcheck="false" required id='inputPost'></textarea>
            <div class="theme-emoji">
            </div>
            <div class="options">
              <p>Add to Your Post</p>
              <ul class="list">
                <li><img src="icons/gallery.svg" alt="gallery"></li>
                <li><img src="icons/more.svg" alt="gallery"></li>
              </ul>
            </div>
            <button id= 'buttonPost'>Post</button>
          </form>
        </section>
      </div>
    `;
  
    // Agregar el HTML al contenedor
    container.innerHTML = html;
  
    // Obtener el elemento con id "root" y agregar el contenedor como su hijo
    const rootElement = document.getElementById("root");
    rootElement.appendChild(container);

    const button = document.querySelector('#buttonPost') 
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        const comment = document.querySelector('#inputPost');
        console.log('Sirve el click', comment.value);
        createPost(comment);
      });

    function updateUserDisplayName() {
        userAuth().then((displayName) => {
        const nameUser = document.querySelector('#userName');
        nameUser.textContent = displayName;
          // Ahora puedes agregar nameUser al DOM u otro lugar donde desees mostrar el nombre de usuario.
        });
      }
    
      // Llama a updateUserDisplayName para actualizar el nombre de usuario cuando sea necesario.
      updateUserDisplayName();


    return container
  }
  
  


