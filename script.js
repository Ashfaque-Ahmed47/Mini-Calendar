const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

// Adding the Months Array
const monthNames = Array.from({ length: 12 }, (_, i) => new Date(2024, i).toLocaleString('en-US', { month: 'long' }));

// Adding the Day Names Array
const dayNames = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 1).toLocaleString('en-US', { weekday: 'long' }));

date.innerHTML = (today.getDate()<10?"0":"")+ today.getDate();
day.innerHTML = dayNames[today.getDay()];
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();


