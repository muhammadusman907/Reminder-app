
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/serviceWorker.js")
      .then(res => console.log(res, "service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
window.addEventListener("load", () => {
  //  const askForNotificationPermission = () => { 
  Notification.requestPermission(result => {

  }
  );
  // }
});

//  ================== sign up page=============
var userName = document.getElementById("user-name");
var signupEmail = document.getElementById("signup-email");
var signupPassword = document.getElementById("signup-password");
// ================ regex ====================
var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// =====================login =========================
var loginEmail = document.getElementById("login-email")
var loginPassword = document.getElementById("login-password")
var names = document.getElementById("user-name")
// ===============================logout=================
var logoutBtn = document.getElementById("logout")




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
var namazInterval = false;
var namazTimeInterval = false;
var index = 0;
var num = 0;
var currentDateGetMilliSec;
var alarmDateGetMillsec;
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(function () {

  // const button = document.getElementById("notifications");
  var clockDate = new Date();
  var clockHour = clockDate.getHours();
  var clockMinute = clockDate.getMinutes();
  var clockSecond = clockDate.getSeconds();
  var clockDay = clockDate.getDay();
  var clockMonth = clockDate.getMonth();
  var clockYear = clockDate.getFullYear();

  namazDay.innerHTML = Week[clockDay];
  namazMonth.innerHTML = month[clockMonth];
  namazYear.innerHTML = clockYear;
  if (clockHour > 12) {
    clockHour = clockHour - 12
    clockAmPm.innerHTML = "pm"
    console.log(clockHour)
    namazInterval = false;
  }
  else {
    namazInterval = true;
    clockAmPm.innerHTML = "am"
  }
  if (clockHour < 10) {
    clockHour = "0" + clockHour;
  }
  if (clockMinute < 10) {
    clockMinute = "0" + clockMinute;
  }
  if (clockSecond < 10) {
    clockSecond = "0" + clockSecond;
  }
  // ================== namaz time condition =========

  if (clockHour == "07" && clockMinute == "05" && clockSecond == "00" && namazInterval) {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("fajar namaz prayer !");
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
  }

  else if (clockHour == "01" && clockMinute == "00" && clockSecond == "00" && !namazInterval) {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("zhur namaz prayer !");
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
  }

  else if (clockHour == "04" && clockMinute == "30" && clockSecond == "00" && !namazInterval) {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("asar namaz prayer!");
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
  }
  else if (clockHour == "05" && clockMinute == "55" && clockSecond == "00" && !namazInterval) {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("maghrib namaz time!");
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
  }

  else if (clockHour == "07" && clockMinute == "30" && clockSecond == "00" && !namazInterval) {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("isha namaz time!");
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
    console.log(namazInterval)
  }
  // ================== namaz time banar =========
  // debugger
  console.log(namazInterval)
  if (clockHour > "07" && clockHour < "12" && namazInterval) {
    namazName.innerHTML = "zhur"
    namazHour.innerHTML = "01";
    namazMinute.innerHTML = "05";
  }
  else if (clockHour > "07" && !namazInterval || clockHour < "07" && namazInterval) {
    namazName.innerHTML = "fajar"
    namazHour.innerHTML = "07";
    namazMinute.innerHTML = "05";
  }
  else if (clockHour > "06" && clockHour < "08" && !namazInterval) {
    namazName.innerHTML = "isha"
    namazHour.innerHTML = "07";
    namazMinute.innerHTML = "30";
  }
  else if (clockHour > "04" && clockHour < "06" && !namazInterval) {
    namazName.innerHTML = "maghrib"
    namazHour.innerHTML = "06";
    namazMinute.innerHTML = "55";
  }
  else if (clockHour > "01" && clockHour < "04" && !namazInterval) {
    namazName.innerHTML = "asar"
    namazHour.innerHTML = "04";
    namazMinute.innerHTML = "30";
  }

  hourDiv.innerText = clockHour;
  minuteDiv.innerText = clockMinute;
  secondDiv.innerText = clockSecond;
}
  , 1000
)

var miliSecMatch = [];
function saveBtn() {
  if (timeDateValue.value.trim() === "") {
    alert("Please select Date")
  }
  else if (descriptionValue.value.trim() === "") {
    Swal.fire({
      icon: 'error',
      title: 'Required Description',
      showConfirmButton: true,
    })
  }
  else {
    Swal.fire({
      icon: 'success',
      title: 'Task Add successFully',
      showConfirmButton: false,
      timer: "1500"
    })
    interval = true;
    var alarmDate = new Date(timeDateValue.value);
    alarmDateGetMillsec = Math.round(alarmDate.getTime() / 1000)
    miliSecMatch.push(alarmDateGetMillsec);

    myTaskDiv.innerHTML += `
<div class="mains animate__animated animate__bounceInDown" id="add-task">
<div>
  <p> <span class="roman-text">${num}</span> 
  ${descriptionValue.value} ${timeDateValue.value.slice(0, 10)}</p>
</div>     

<div>
<span><i class="fa-solid fa-clock"></i></span>

<span>${formattedTime = moment(timeDateValue.value.slice(11), "HH:mm:ss").format(
      "h:mm:ss A"
    )}</span>
<button class="btn btn-danger ms-3" onclick="del(this)"><i class="fa-solid fa-delete-left"></i></button>
</div>
</div>`

    descriptionValue.value = "";
    timeDateValue.value = "";
    num++
  }
}

setInterval(function () {
  if (interval) {
    var currentDate = new Date();
    currentDateGetMilliSec = Math.round(currentDate.getTime() / 1000);
    console.log(miliSecMatch)
    miliSecMatch.forEach(function (v) {
      console.log(v)
      if (currentDateGetMilliSec === v) {
        if (!("Notification" in window)) {
          // Check if the browser supports notifications
          alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
          // Check whether notification permissions have already been granted;
          // if so, create a notification
          const notification = new Notification("Task ka time dakho so raha ho abhi tak !");
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
        console.log(miliSecMatch)
        interval = false;
        //  miliSecMatch.unshift()
        index++;
      }
    })

    console.log(miliSecMatch)
    if (miliSecMatch == []) {
      alert("khali")
      interval = false;
    }
    else {
      interval = true
      // alert("kam ok")
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
  editInput.style.display = "none";

}
function del(e) {
  // var taskAdd = document.getElementById("task-add")
  var numNumber = parseInt(e.parentNode.parentNode.childNodes[1].childNodes[1].innerText);
  console.log(numNumber)
  miliSecMatch.splice(numNumber, 1, "")
  console.log(e.parentNode.parentNode.childNodes[1].childNodes[1].innerText)
  e.parentNode.parentNode.remove()
}
// =======================================================================//
//============================ signup ======================================
// =======================================================================//

function signup() {
  if (userName.value.trim() !== "" && signupEmail.value.trim() !== "" && signupPassword.value.trim() !== "") {
    if (signupEmail.value.toLowerCase().match(regex)) {
      if (signupPassword.value.length < 7) {
        Swal.fire({
          icon: 'error',
          title: 'passwod chota hai',
          showConfirmButton: true,
        })
        // alert("passwod chota hai")
      }
      else {
        var obj = {
          user_name: userName.value,
          signup_email: signupEmail.value,
          signup_password: signupPassword.value,
        }
        console.log(obj)
        var userDataStr = JSON.stringify(obj);
        localStorage.setItem("userData", userDataStr);
        Swal.fire({
          icon: 'success',
          title: 'signup successfully',
          showConfirmButton: true,
        })
        setInterval(function () {
          location.href = "./login.html"
        }, 2000)


        // console.log(userName.value) // ================ user name
        // console.log(signupEmail.value);// ============= user email
        // console.log(signupPassword.value); ============ user password
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'email incorrect',
        showConfirmButton: true,
      })
      // alert("email incorrect")
    }
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'input not filled',
      showConfirmButton: true,
    })
    // alert("not found")
  }
}
// ========================= login ======================== //

function login() {
  if (loginPassword.value.trim() !== "" && loginEmail.value.trim() !== "") {
    if (loginEmail.value.toLowerCase().match(regex)) {
      if (loginPassword.value.length < 7) {
        // alert(" passwod chota hai")
        Swal.fire({
          icon: 'error',
          title: 'passwod chota hai',
          showConfirmButton: true,
        })
      }
      else {
        console.log(loginEmail.value);
        console.log(loginPassword.value);
        var userDataParse = JSON.parse(localStorage.getItem("userData"))
        console.log(userDataParse)
        if (loginEmail.value === userDataParse.signup_email) {
          if (loginPassword.value === userDataParse.signup_password) {
            Swal.fire({
              icon: 'success',
              title: 'login successfully',
              showConfirmButton: true,
            })
            setInterval(function () {
              // alert("login successfully")
              location.href = "./reminder.html"
            }, 1000
            )

          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'incorrect password',
              showConfirmButton: true,
            })
            // alert("incorrect password")
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'email not found',
            showConfirmButton: true,
          })
          // alert("email not found")
        }

      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'email incorrecrt',
        showConfirmButton: true,
      })
      // alert("email incorrecrt")
    }
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'input not filled',
      showConfirmButton: true,
    })
    // alert("input not filled")
  }
}
// ================================= logout =============================//
function logout() {
  location.href = "./login.html";
}
// ================================= user name===========================//
var parsename = JSON.parse(localStorage.getItem("userData"))
if (names) {
  names.innerText = `Hello ${parsename.user_name}`;
}