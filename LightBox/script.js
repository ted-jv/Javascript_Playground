let lightBox = document.createElement('div'); // 요소 만들고 아래 노드에 붙히기
lightBox.id = 'lightbox';
document.body.appendChild(lightBox); // 노드에 붙히기

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', onImgClick);
});

function onImgClick() {
  lightBox.classList.add('visible');
  const img = document.createElement('img');
  let lightBoximgSrc = this.src;
  img.src = lightBoximgSrc;
  lightBox.appendChild(img);
}

lightBox.addEventListener('click', onImgRemoveClick);

function onImgRemoveClick() {
  lightBox.classList.remove('visible');
  lightBox.removeChild(lightBox.firstChild);
}
