export function home(navigateTo) {
  const section = document.createElement('section');
  const post = document.createElement('input');
  post.id = 'inputPost';
  post.type = 'text';
  const buttonPost = document.createElement('button');
  buttonPost.id = 'buttonPost';
  buttonPost.textContent = 'Post';
  section.append(post, buttonPost);

  buttonPost.addEventListener('click', () => {
    const coment = document.querySelector('#inputPost').value;
  });

  return section;
}
