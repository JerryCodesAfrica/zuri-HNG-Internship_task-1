//geting the day of the week in words
let date = new Date();
let today = date.getDay();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayDisplay = document.querySelector('#week');
dayDisplay.innerHTML = daysOfTheWeek[today];

//rendering the UTC time to the DOM
let showTime = () => {
   let date = new Date();
   let milliseconds = Date.now();
   let timeDisplay = document.querySelector('#time');
   let utctimeDisplay;

   milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
   utctimeDisplay = milliseconds;

   timeDisplay.innerHTML = utctimeDisplay;


   setTimeout(showTime, 100);
};

showTime();