const lineWidth = document.getElementById('line-width');
const color = document.getElementById('line-color');
const colorOptions = Array.from(document.getElementsByClassName('color-option'));
const fillBackgroundBtn = document.getElementById('fill-color-btn');
const resetBtn = document.getElementById('reset-btn');
const eraserBtn = document.getElementById('eraser-btn');
const fileInput = document.getElementById('image-file');

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d'); // canvas에 그림 그리는 붓 역할 ( ctx = context )

canvas.width = 800; // canvas를 css 파일, js 파일에서 사이즈 지정해줘야 한다.
canvas.height = 800;

CANVAS_WIDTH = canvas.width;
CANVAS_HEIGHT = canvas.height;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isBackgroundFilling = false;
let isErasering = false;

function mouseMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY); // 선 긋기
    ctx.stroke();
    return;
  }
  ctx.moveTo(e.offsetX, e.offsetY); // 유저가 움직이는 곳
}

function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
  ctx.beginPath();
}
function onColorClick(e) {
  // 오른쪽 컬러 모음 클릭으로 변경
  ctx.beginPath();
  const colorValue = e.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onColorChange(e) {
  // 왼쪽 컬러 변경
  ctx.beginPath();
  const colorValue = e.target.value;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onFillBackgroundColor() {
  // 배경색 채우기
  if (isBackgroundFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
function onFillBackgroundBtnClick() {
  if (isBackgroundFilling) {
    isBackgroundFilling = false;
    fillBackgroundBtn.innerText = 'Fill';
  } else {
    isPainting = false;
    isBackgroundFilling = true;
    fillBackgroundBtn.innerText = 'Draw';
  }
}
function onResetBtnClick() {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  color.value = '#ffffff';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserBtnClick() {
  ctx.beginPath();
  isBackgroundFilling = false;
  fillBackgroundBtn.innerText = 'Fill';
  color.value = '#ffffff';
  ctx.strokeStyle = 'white';
}
function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

colorOptions.forEach(color => color.addEventListener('click', onColorClick));

/* 이벤트 리스너 */
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onFillBackgroundColor);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

fillBackgroundBtn.addEventListener('click', onFillBackgroundBtnClick);
resetBtn.addEventListener('click', onResetBtnClick);
eraserBtn.addEventListener('click', onEraserBtnClick);
fileInput.addEventListener('change', onFileChange);

/* 아래 컨버스에 색 다른 선들 만들기 */

// const colors = ['#32ff7e', '#7efff5', '#18dcff'];

// function onClick(e) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener('mousemove', onClick);

/* 아래 그림 그리는 기본 메소드 */

// // fill 색 채우기, rect 선
// ctx.fillRect(); // 색 채우면서 선 긋기
// ctx.strokeRect(); // 선만 긋기
// ctx.beginPath(); // 이전 경로와 단절 (위의 사각형과 아래 사각형 다른 색 넣고 싶을 때.)

// ctx.moveTo(50, 50); // 캔버스 안에서 좌표 위치 이동
// ctx.lineTo(150, 50); // 캔버스 안에서 라인 그리기
// ctx.stroke(); // 그림 그리기 ( 획 )
// ctx.fill(); // 색 채우기
