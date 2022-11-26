const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');

// new Date
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'August', 'Jun', 'July', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  let lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = '';
  for (let i = 1; i <= lastDayOfMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();
