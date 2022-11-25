const openModalBtn = document.querySelector('[data-modal-target]');
const closeModalBtn = document.querySelector('[data-close-target]');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');

let modalOpen = false;

openModalBtn.onclick = () => {
  if (modalOpen === false) {
    modalOpen = true;
    modal.classList.add('active');
    overlay.classList.add('active');
    console.info(overlay);
  }
};

function onCloseModalClick() {
  if (modalOpen === true) {
    modalOpen = false;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
}

closeModalBtn.addEventListener('click', onCloseModalClick);
overlay.addEventListener('click', onCloseModalClick);

// 처음에 아래와 같이 addEvent로 안 했었는데 이 경우 overlay를 아래와 같이 같은 내용의 함수를 onclick 함수로 적어줘야함.
// so, 같은 기능을 담았기에 하나의 함수로 컨트롤 하는게 더 효율적이라는 판단으로 아래 두 개는 리스너에 함수를 정의한 후 넣었다.

// closeModalBtn.onclick = () => {
//   if (modalOpen === true) {
//     modalOpen = false;
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
//     overlay.
//   }
// };
