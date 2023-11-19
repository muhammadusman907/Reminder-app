
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
var interval = false;
var currentDateGetMilliSec;
var alarmDateGetMillsec;
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
    console.log("serviceWorker" in navigator)

    if ("serviceWorker" in navigator) {
      // window.addEventListener("load", function() {
        navigator.serviceWorker.register("/serviceWorker.js")
          .then(res => console.log( res ,"service worker registered"))
          .catch(err => console.log("service worker not registered", err))  
      // })
    }
    // console.log("currrent", currentDateGetMilliSec)
    // console.log("aga", alarmDateGetMillsec)
    if (currentDateGetMilliSec === alarmDateGetMillsec) {
      alert(currentDateGetMilliSec, alarmDateGetMillsec)
             interval = false;
    
    }
  }
}, 1000)



function myTask() {
  namazTimeDiv.style.display = "none";
  myTaskDiv.style.display = "flex";

}
function namazTime() {
  myTaskDiv.style.display = "none";
  namazTimeDiv.style.display = "flex";
}


