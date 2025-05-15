document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('.detail-article');
  if (article) {
    setTimeout(() => {
      article.classList.add('visible');
    }, 200);
  }
});

function tampilkanPesan(event) {
  event.preventDefault();

  const pesan = document.getElementById('pesan-sukses');
  pesan.style.display = 'block';

  document.querySelector('.form-komentar').reset();

  setTimeout(function () {
    pesan.style.display = 'none';
  }, 4000);
}
