const wrapper = document.querySelector('.wrapper');
selectBtn = wrapper.querySelector('.select-btn');
options = wrapper.querySelector('.options');
searchInp = wrapper.querySelector('input');
const countries = [
  'Algeria',
  'Australia',
  'Argentina',
  'Colombia',
  'Denmark',
  'Belarus',
  'Brazil',
  'Cameroon',
  'Germany',
  'Korea',
  'Belgium',
  'Bolivia',
  'Chile',
  'Canada',
];

// 나라 클릭시 맨 위 박스 이름 변경
function addCountry(selectedCountry) {
  options.innerHTML = '';
  countries.forEach(country => {
    // click한 나라 li에 selected class 추가
    let isSelected = country == selectedCountry ? 'selected' : '';
    // country 추가 &
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML('beforeend', li);
  });
}

addCountry();

function updateName(selectedLi) {
  searchInp.value = '';
  addCountry(selectedLi.innerText);
  wrapper.classList.remove('active');
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

searchInp.addEventListener('keyup', () => {
  let searchVal = searchInp.value.toLowerCase();
  arr = [];
  arr = countries
    .filter(data => data.toLowerCase().startsWith(searchVal))
    .map(data => `<li onclick="updateName(this)">${data}</li>`)
    .join('');

  options.innerHTML = arr ? arr : `<p>Country not found</p>`;
});
