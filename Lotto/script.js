const numberDiv = document.querySelector('.numbers');
const drawBtn = document.querySelector('#draw');
const resetBtn = document.querySelector('#reset');

const lottoNumbers = [];
const colors = ['tomato', 'teal', 'orange', 'purple', 'blue'];

// Listener
drawBtn.addEventListener('click', onDrawBtnClick);

// function
function onDrawBtnClick() {
  while (lottoNumbers.length < 6) {
    let random = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(random) === -1) {
      // indexOf는 인자가 앞의 배열에 존재하지 않으면 -1을 반환
      lottoNumbers.push(random);
    }
  }
}
console.log(lottoNumbers[0]);
