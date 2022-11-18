const lineWidth = document.getElementById('line-width');
const lineColor = document.getElementById('line-color');

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d'); // canvas에 그림 그리는 붓 역할 ( ctx = context )

canvas.width = 800; // canvas를 css 파일, js 파일에서 사이즈 지정해줘야 한다.
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let isPainting = false;

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
function onLineColorChange(e) {
  ctx.strokeStyle = e.target.value;
  console.info(e.target.value);
  ctx.beginPath();
}

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onLineWidthChange);
lineColor.addEventListener('change', onLineColorChange);
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
