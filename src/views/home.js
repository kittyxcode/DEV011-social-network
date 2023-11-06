import { async } from 'regenerator-runtime';
import {
  createPost,
  deleteComment,
  renderPostRealTime,
  editarComment,
  verificarLikes,
} from '../lib/index.js';
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
  divPost.id = 'divPost';
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  postSection.innerHTML = '';
  const nameUser = document.createElement('h1');
  const contedorPost = document.createElement('div');
  contedorPost.id = 'contendorPost';
  contedorPost.append(nameUser, post, buttonPost);
  divPost.append(postSection);
  section.append(contedorPost, divPost);

  buttonPost.addEventListener('click', () => {
    const comment = document.querySelector('#inputPost').value;

    if (comment !== '') createPost(comment);
    else {
      alert('Agrega un comentario antes de enviarlo.');
    }
  });
  function updateUserDisplayName() {
    userAuth().then((user) => {
      nameUser.textContent = user.displayName;
    });
  }

  // Llama a updateUserDisplayName para actualizar el nombre de usuario cuando sea necesario.
  updateUserDisplayName();

  renderPostRealTime((querySnapshot) => {
    post.value = '';
    postSection.textContent = '';
    querySnapshot.forEach((doc) => {
      const divEdit = document.createElement('div');
      divEdit.id = 'divEdit';
      const postNuevo = document.createElement('input');
      postNuevo.value = doc.data().comment;
      postNuevo.classList.add('comentario-input'); // Asigna una clase a los elementos input
      postNuevo.disabled = true;
      const imgEditar = document.createElement('img');
      imgEditar.className = 'Edit';
      imgEditar.src = '/img/Edit.png';
      const idUserActual = localStorage.getItem('idUser');
      const imgDelete = document.createElement('img');
      imgDelete.className = 'borrar';
      imgDelete.src = '/img/borrar.png';
      if (doc.data().userId === idUserActual) {
        imgDelete.style.display = 'block';
      } else {
        imgDelete.style.display = 'none';
      }
      if (doc.data().userId === idUserActual) {
        imgEditar.style.display = 'block';
      } else {
        imgEditar.style.display = 'none';
      }
      const countLikes = document.createElement('label');
      countLikes.textContent = doc.data().likes.length;
      countLikes.id = 'countLikes';
      const imgLike = document.createElement('img');
      imgLike.className = 'Like';
      imgLike.src = '/img/Like.png';
      postSection.append(divEdit);
      divEdit.append(postNuevo, imgLike, countLikes, imgEditar, imgDelete);

      imgLike.addEventListener('click', async () => {
        await verificarLikes(doc.id); // Espera a que verificarLikes se complete antes de continuar
      });

      imgDelete.addEventListener('click', () => {
        const resultado = window.confirm(
          '¿Estás seguro de que deseas eliminar este comentario?'
        );

        if (resultado) {
          const docId = doc.id;
          deleteComment(docId);
        } else {
        }
      });
      imgEditar.addEventListener('click', () => {
        postNuevo.disabled = false;
        const botonGuardarEdition = document.createElement('button');
        botonGuardarEdition.textContent = 'Save';
        divEdit.append(botonGuardarEdition);
        botonGuardarEdition.addEventListener('click', () => {
          editarComment(doc.id, postNuevo.value);
        });
      });
    });
  });
  return section;
}
