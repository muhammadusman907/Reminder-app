
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/serviceWorker.js")
      .then(res => console.log( res ,"service worker registered"))
      .catch(err => console.log("service worker not registered", err))  
  })
}
var descriptionValue = document.getElementById("description-value");
var timeDateValue = document.getElementById("date-time-value");
var myTaskDiv = document.getElementById("my-task");
var namazTimeDiv = document.getElementById("namaz-time");
var hourDiv = document.getElementById("hour");
var minuteDiv = document.getElementById("minute");
var secondDiv = document.getElementById("second");
var clockAmPm = document.getElementById("clock-am-pm");
var namazName = document.getElementById("namaz-name");
var namazHour = document.getElementById("namaz-hour");
var namazMinute = document.getElementById("namaz-minute");
var namazDay = document.getElementById("namaz-day");
var namazMonth = document.getElementById("namaz-month");
var namazYear = document.getElementById("namaz-year");
var editInput = document.getElementById("edit-input");
var interval = false;
var namazInterval = false ;
var currentDateGetMilliSec;
var alarmDateGetMillsec;
var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
 var Week =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];          
setInterval(function(){
 
  // const button = document.getElementById("notifications");
window.addEventListener("load", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});
  var clockDate = new Date();
  var clockHour = clockDate.getHours();
  var clockMinute = clockDate.getMinutes();
  var clockSecond = clockDate.getSeconds();
  var clockDay = clockDate.getDay();
  var clockMonth = clockDate.getMonth();
  var clockYear = clockDate.getFullYear();

  namazDay.innerHTML = Week[clockDay] ; 
  namazMonth.innerHTML = month[clockMonth] ; 
  namazYear.innerHTML =  clockYear; 
  if (clockHour > 12 ){
    clockHour = clockHour - 12
    clockAmPm.innerHTML = "pm"
    console.log(clockHour)
    namazInterval = false;
  }
  else{
    namazInterval = true;
    clockAmPm.innerHTML = "am"
  }
  if (clockHour < 10 ){
    clockHour = "0" + clockHour ;
  }
  if (clockMinute < 10 ){
    clockMinute = "0"+clockMinute  ;
  }
  if (clockSecond < 10 ){
    clockSecond = "0"+clockSecond  ;
  }
  // ================== namaz time condition =========
  if(clockHour === "07" && clockMinute === "00" && namazInterval){
    alert("fajar")
  }

  else if (clockHour === "01" && clockMinute  === "00" && !namazInterval){
       alert("zhur")
  }

  else if (clockHour === "04" && clockMinute  === "30" && !namazInterval){
    alert("asar")
}
else if (clockHour === "05" && clockMinute  === "55"&& !namazInterval){
  alert("mughrib")
}
else if (clockHour === "07" && clockMinute  === "30" && !namazInterval){
  alert("isha")
}
  // ================== namaz time banar =========
  
  if (clockHour > "07" && namazInterval){
         namazName.innerHTML = "zhur"
         namazHour.innerHTML = "01";
         namazMinute.innerHTML = "05"; 
  }
  else if ( clockHour > "07" || clockHour > "01"  ){
  namazName.innerHTML = "fajar" 
  namazHour.innerHTML = "07";
  namazMinute.innerHTML = "05";
}
  else if (clockHour > "06" && !namazInterval ){
  namazName.innerHTML = "isha" 
  namazHour.innerHTML = "07";
  namazMinute.innerHTML = "30";
}
  else if (clockHour > "04" && !namazInterval ){
  namazName.innerHTML = "maghrib" 
  namazHour.innerHTML = "06";
  namazMinute.innerHTML = "55";
}
else if (clockHour > "01" && !namazInterval){
    namazName.innerHTML = "asar" 
    namazHour.innerHTML = "04";
    namazMinute.innerHTML = "30";
}

    hourDiv.innerText = clockHour;
    minuteDiv.innerText = clockMinute;
    secondDiv.innerText = clockSecond;
}
,1000
)


function saveBtn() {

  interval = true;
  var alarmDate = new Date(timeDateValue.value);
  alarmDateGetMillsec = Math.round(alarmDate.getTime() / 1000)
  var equal = currentDateGetMilliSec - alarmDateGetMillsec;
  console.log(equal / 1000 / 60)
  console.log(descriptionValue.value)
  console.log(timeDateValue.value)

  myTaskDiv.innerHTML += `
<div class="mains">
<div>
  <p>${descriptionValue.value} , ${timeDateValue.value.slice(0, 10)}</p>
</div>
<div><span><i class="fa-solid fa-clock"></i></span>
  <span>${timeDateValue.value.slice(11)}</span>
</div>
</div>`

  descriptionValue.value = "";
  timeDateValue.value = "";
}

setInterval(function () {
  if (interval) {
    var currentDate = new Date();
    currentDateGetMilliSec = Math.round(currentDate.getTime() / 1000);
    
    if (currentDateGetMilliSec === alarmDateGetMillsec) {
      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification("Task ka time dakho so raha ho abhi!");
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            const notification = new Notification(de);
            // …
          }
        });
      }
             interval = false;
    }
  }
}
, 1000)



function myTask() {
  namazTimeDiv.style.display = "none";
  editInput.style.display = "flex";
  myTaskDiv.style.display = "flex";

}
function namazTime() {
  myTaskDiv.style.display = "none";
  namazTimeDiv.style.display = "flex";
}


