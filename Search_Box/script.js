const wrapper = document.querySelector('.wrapper');
selectBtn = wrapper.querySelector('.select-btn');
options = wrapper.querySelector('.options');

const countries = ['Australia', 'Colombia', 'Denmark', 'Germany', 'Korea', 'Belgium', 'Bolivia', 'Chile', 'Canada'];

function addCountry() {
  countries.forEach(country => {
    let li = `<li onclick="updateName(this)">${country}</li>`;
    options.insertAdjacentHTML('beforeend', li);
  });
}

selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

addCountry();

function updateName(selectedLi) {
  wrapper.classList.remove('active');
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
