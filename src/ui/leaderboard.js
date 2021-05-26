document.addEventListener('DOMContentLoaded', () => {
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    document.querySelector('#leader-board').style.display = 'none';
  });
});
