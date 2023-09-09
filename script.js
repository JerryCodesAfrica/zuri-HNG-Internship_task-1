//geting the day of the week in words
let date = new Date();
let today = date.getDay();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayDisplay = document.querySelector('#week');
dayDisplay.innerHTML = daysOfTheWeek[today];
//rendering the days of the week to the DOM
let showTime=()=>{
  let date = new Date();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let seconds = date.getSeconds();
  let timeDisplay = document.querySelector('#time');
  let utctimeDisplay;
  
  
  hour = hour<10?`0${hour}`: hour;
  minute = minute<10?`0${minute}`: minute;
  seconds = seconds<10?`0${seconds}`:seconds;
  utctimeDisplay = `${hour}:${minute}:${seconds}`;

  timeDisplay.innerHTML=utctimeDisplay;
  
  
  setTimeout(showTime,1000);
};

showTime();
