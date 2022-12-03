const numberDiv = document.querySelector('.numbers');
const drawBtn = document.querySelector('#draw');
const resetBtn = document.querySelector('#reset');

const lottoNumbers = [];
const colors = ['tomato', 'teal', 'orange', 'purple', 'blue'];

// Listener
drawBtn.addEventListener('click', onDrawBtnClick);
resetBtn.addEventListener('click', onResetBtnClick);

// function
function onDrawBtnClick() {
  while (lottoNumbers.length < 6) {
    let random = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(random) === -1) {
      // indexOf는 인자가 앞의 배열에 존재하지 않으면 -1을 반환
      lottoNumbers.push(random);
      paintNumber(random);
    }
  }
}

function paintNumber(number) {
  const lottoNumberDiv = document.createElement('div');
  let colorIndex = Math.floor(number / 10);
  lottoNumberDiv.style.color = colors[colorIndex];
  lottoNumberDiv.classList.add('lottonumber');
  lottoNumberDiv.textContent = number;
  numberDiv.appendChild(lottoNumberDiv);
}

function onResetBtnClick() {
  lottoNumbers.splice(0, 6); // lottoNumbers = []로 할 경우 위의 lottoNumbers가 const로 되어있으므로 에러 발생 , const 재할당 불가
  numberDiv.textContent = ''; // innerHTML도 가능
}
