let count = 2;

window.onscroll = () => {
  // console.info(window.innerHeight, window.scrollY, document.body.offsetHeight);
  // window.innerHeight - 윈도우 창에 보이는 화면 높이 ,  window.scrollY - 내 스크롤 세로 위치 , document.body.offsetHeight- 내 html body 총 높이
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let toAddDiv = document.createElement('div');
    toAddDiv.classList.add('box');
    toAddDiv.textContent = `${++count}번째`;
    document.querySelector('section').appendChild(toAddDiv);
  }
};
