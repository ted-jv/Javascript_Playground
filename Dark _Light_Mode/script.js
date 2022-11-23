let toggleBtn = document.querySelector('#toggle-btn');
let toggleOn = false;

let body = document.body;

toggleBtn.addEventListener('click', toggleOnClick);

function toggleOnClick() {
  if (toggleOn === false) {
    toggleOn = true;
    toggleBtn.className = 'fa-solid fa-toggle-on fa-3x';
    body.classList.add('darkMode');
  } else {
    toggleOn = false;
    toggleBtn.className = 'fa-solid fa-toggle-off fa-3x';
    body.classList.remove('darkMode');
  }
}
