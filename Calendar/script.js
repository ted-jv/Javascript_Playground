const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextBtn = document.querySelectorAll('.icons span');

// new Date
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'August', 'Jun', 'July', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // 현재 일주일
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // 최근 31일 구한 것
  lastDayofMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // 지난 달 31일 구한 것

  let liTag = '';

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'active' : '';

    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
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
