document.addEventListener('DOMContentLoaded', () => {
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    document.querySelector('#score-board').style.display = 'none';
  });
});
