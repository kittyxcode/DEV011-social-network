import { createPost, deleteComment, querySnapshot, renderPostRealTime } from '../lib/index.js';
import { userAuth } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');
  section.className = 'sectionhome';
  const post = document.createElement('input');
  post.id = 'inputPost';
  post.type = 'textArea';
  post.placeholder = "What's on your mind?";
  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.textContent = 'Post';
  const divPost = document.createElement('div');
  divPost.id = "divPost";
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  postSection.innerHTML = "";
  const nameUser = document.createElement('h1');
  const contedorPost = document.createElement('div');
  contedorPost.id = 'contendorPost';
  // const botonEditar = document.createElement('div');
  // botonEditar.id = 'botonEditar';
  contedorPost.append(nameUser, post, buttonPost);
  divPost.append(postSection);
  section.append(contedorPost, divPost);
  
  
// botonEditar.addEventListener('click', () => {
//   const comentarioInput =doc.querySelector('.comentario-input');
//   comentarioInput.readOnly = false;
//   comentarioInput.focus();
// })  
  
buttonPost.addEventListener('click', () => {
    const comment = document.querySelector('#inputPost').value;
    console.log('Sirve el click', comment.value);
    createPost(comment);
  });
  function updateUserDisplayName() {
    userAuth().then((displayName) => {
      nameUser.textContent = displayName;
      // Ahora puedes agregar nameUser al DOM u otro lugar donde desees mostrar el nombre de usuario.
    });
  }

  // Llama a updateUserDisplayName para actualizar el nombre de usuario cuando sea necesario.
  updateUserDisplayName();

  
  renderPostRealTime((querySnapshot) => {
    post.value = '';
    postSection.textContent = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      const divEdit = document.createElement('div');
      divEdit.id = "divEdit";
      const postNuevo = document.createElement('input');
      postNuevo.value = doc.data().comment;
      postNuevo.classList.add('comentario-input'); // Asigna una clase a los elementos input
      postNuevo.disabled = true;
      const imgEditar = document.createElement('img');
      imgEditar.className = 'Edit';
      imgEditar.src = '/img/Edit.png';
      const imgDelete = document.createElement('img');
      imgDelete.className = 'borrar';
      imgDelete.src = '/img/borrar.png';
      const imgLike = document.createElement('img');
      imgLike.className = 'Like';
      imgLike.src = '/img/Like.png';
      postSection.append(divEdit);
      divEdit.append(postNuevo, imgLike, imgEditar, imgDelete);

      imgDelete.addEventListener('click', () => {
        const docId = doc.id;
        deleteComment(docId);
        console.log('sirve el click');
      }); 

    });

  });
  return section;
}
