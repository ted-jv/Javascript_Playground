let currentIndex = 0; // 현재 이미지 인덱스
let positionValuse = 0; // 사진 위치
const IMAGE_WIDTH = 400;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');

function init() {
  prevBtn.setAttribute('disabled', 'true');
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
}

function next() {
  if (currentIndex < 2) {
    prevBtn.removeAttribute('disabled');
    positionValuse -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValuse}px)`;
    currentIndex += 1;
  }
  if (currentIndex === 2) {
    nextBtn.setAttribute('disabled', 'true');
  }
}

function prev() {
  if (0 < currentIndex) {
    nextBtn.removeAttribute('disabled');
    positionValuse += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValuse}px)`;
    currentIndex -= 1;
  }
  if (currentIndex === 0) {
    prevBtn.setAttribute('disabled', 'true');
  }
}

init();
