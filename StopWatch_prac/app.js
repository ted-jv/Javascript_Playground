let minutes = 0;
let seconds = 0;
let tenmillis = 0;

const appendMin = document.querySelector('#minutes');
const appendSec = document.querySelector('#seconds');
const appendTenmillis = document.querySelector('#tenmillis');
const buttonStart = document.querySelector('#Start');
const buttonStop = document.querySelector('#Stop');
const buttonReset = document.querySelector('#Reset');

buttonStart.onclick = () => {
  setInterval(operateTimer, 10);
};

//10ms 마다 시간 증가
function operateTimer() {
  tenmillis++;
  appendTenmillis.textContent = tenmillis < 9 ? '0' + tenmillis : tenmillis; // 삼항연산자 이 부분 중요 ! good !
  if (tenmillis > 99) {
    seconds++;
    appendSec.textContent = seconds < 9 ? '0' + seconds : seconds; // 삼항연산자 이 부분 중요 ! good !
    tenmillis = 0;
  }
  if (seconds > 59) {
    minutes++;
    appendMin.textContent = minutes < 10 ? '0' + minutes : minutes; // 삼항연산자 이 부분 중요 ! good !
    seconds = 0;
  }
}
