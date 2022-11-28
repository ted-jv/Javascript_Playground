const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextBtn = document.querySelectorAll('.icons span');

// new Date
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'August', 'Jun', 'July', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = '';

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

prevNextBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    currMonth = btn.id === 'prev' ? currMonth - 1 : currMonth + 1;
    renderCalendar();
  });
});

renderCalendar();
