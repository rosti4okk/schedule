daysContainer = document.getElementsByClassName('days-container')[0];

const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
const today = new Date();
const dayOfWeekIndex = today.getDay();
const day = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();
const formattedDate = `<b id="item1">${daysOfWeek[dayOfWeekIndex]}</b>, ${day} ${months[monthIndex]} ${year}`;

function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = `${(hours < 10 ? '0' : '')}${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;

    timeText = document.getElementsByClassName('time-container')[0];
    timeText.innerHTML = `<p class="time-text">${formattedTime}</p>`;
}
setInterval(updateClock, 1000);
updateClock();

dateText = document.getElementsByClassName('date-container')[0];
dateText.innerHTML = `<p class="date-text">${formattedDate}</p>`;












// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://testapi.io/api/nazarrudenok/9b/timetable', true);
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     var data = JSON.parse(xhr.responseText);

//     for (var i in data) {
//       if (data.hasOwnProperty(i)) {
//           var dayCont = document.createElement('div');
//           dayCont.classList.add('day-cont');
  
//           var p = document.createElement('p');
//           p.textContent = i;
//           p.classList.add('day-item');
  
//           dayCont.appendChild(p);
//           daysContainer.appendChild(dayCont);
  
//           var lessonContainer = document.createElement('div');
//           lessonContainer.classList.add('lesson-container');
  
//           for (var j = 0; j < data[i].length; j++) {
//               var lessonItemContainer = document.createElement('div');
//               lessonItemContainer.classList.add('lessons-container');

//               var lessonItemNumber = document.createElement('p');
//               lessonItemNumber.textContent = (j + 1);
//               lessonItemNumber.classList.add('lesson-item-number');
//               lessonItemContainer.appendChild(lessonItemNumber);
  
//               var lessonItem = document.createElement('p');
//               lessonItem.textContent = data[i][j];
//               lessonItem.classList.add('lesson-item');
//               lessonItemContainer.appendChild(lessonItem);
  
//               lessonContainer.appendChild(lessonItemContainer);
//           }
  
//           dayCont.appendChild(lessonContainer);
//       }
//   }

//   var num35 = document.getElementsByClassName('lesson-item-number')[35];
//   num35.remove();

//   } else {
//     console.error('Помилка запиту. Статус: ' + xhr.status);
//   }
// };
// xhr.onerror = function () {
//   console.error('Помилка мережі при відправці запиту');
// };
// xhr.send();
