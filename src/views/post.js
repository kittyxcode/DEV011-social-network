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
                <p>CodingNepal</p>
                <div class="privacy">
                  <i class="fas fa-user-friends"></i>
                  <span>Friends</span>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </div>
            <textarea placeholder="What's on your mind?" spellcheck="false" required></textarea>
            <div class="theme-emoji">
            </div>
            <div class="options">
              <p>Add to Your Post</p>
              <ul class="list">
                <li><img src="icons/gallery.svg" alt="gallery"></li>
                <li><img src="icons/more.svg" alt="gallery"></li>
              </ul>
            </div>
            <button>Post</button>
          </form>
        </section>
      </div>
    `;
  
    // Agregar el HTML al contenedor
    container.innerHTML = html;
  
    // Obtener el elemento con id "root" y agregar el contenedor como su hijo
    const rootElement = document.getElementById("root");
    rootElement.appendChild(container);

    return container
  }
  
  


