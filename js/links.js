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