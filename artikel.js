document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('.detail-article');
  if (article) {
    setTimeout(() => {
      article.classList.add('visible');
    }, 200);
  }
});