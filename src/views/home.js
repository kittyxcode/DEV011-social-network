import { createPost, querySnapshot } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');
  const post = document.createElement('input');
  post.id = 'inputPost';
  post.type = 'text';
  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.textContent = 'Post';
  section.append(post, buttonPost);
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  buttonPost.addEventListener('click', () => {
    const comment = document.querySelector('#inputPost').value;
    console.log('Sirve el click', comment.value);
    createPost(comment);
  });
  querySnapshot.then((docs) => {
    docs.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      const postNuevo = document.createElement('input');
      postNuevo.value = doc.data().comment;
      section.append(postNuevo);
    });
  });

  return section;
}
