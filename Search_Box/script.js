const selectBtn = document.querySelector('.select-btn');
const content = document.querySelector('.content');

selectBtn.addEventListener('click', () => {
  content.classList.toggle('active');
});
