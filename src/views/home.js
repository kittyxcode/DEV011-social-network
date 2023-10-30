import { createPost, querySnapshot, renderPostRealTime } from '../lib/index.js';
import { userAuth } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');
  const post = document.createElement('input');
  post.id = 'inputPost';
  post.type = 'text';
  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.textContent = 'Post';
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  const nameUser = document.createElement('h2');
  const contedorPost = document.createElement('div');
  contedorPost.id = 'contendorPost';
  contedorPost.append(nameUser, post, buttonPost);
  section.append(contedorPost, postSection);
  
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
      const postNuevo = document.createElement('input');
      postNuevo.value = doc.data().comment;
      postSection.append(postNuevo);
    });
  });
  return section;
}
