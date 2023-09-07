//geting the day of the week in words
let date = new Date();
let today = date.getDay();
let hour = date.getUTCHours();
let minute = date.getUTCMinutes();
let seconds = date.getUTCSeconds();
let milliseconds = date.getMilliseconds();

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//rendering the days of the week to the DOM
fillInfo =()=>{
     let todayDay = daysOfTheWeek[today];
     document.querySelector("#week").innerHTML = todayDay;
     //time in milliseconds

     let currentTime = hour+":"+minute+":"+seconds+":"+milliseconds;
     document.querySelector("#time").innerHTML = currentTime;
}


console.log(minute)
