// const clockDisplay = document.getElementsByClassName('clock')[0];
const hourDisplay = document.getElementsByClassName("hour")[0];
const minuteDisplay = document.getElementsByClassName("minute")[0];
const secondDisplay = document.getElementsByClassName("second")[0];
const ampmDisplay = document.getElementsByClassName("ampm")[0];

function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let ampm = "ampminj";

  // adding extra 0 before one char time
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  // filter ampm
  if (hour < 12) {
    ampm = "AM";

    // when hour is 0 or midnight
    if (hour == 0) {
      hour = 12;
    }
    // when hour is 0 or midnight
    // if (hour == 0) {
    //   hour = 12;
    // }
  } else if (hour == 12) {
    ampm = "PM";
  } else {
    hour = eval(`${hour} - 12`);
    ampm = "PM";
  }

  // Display Time in HTML
  hourDisplay.innerText = `${hour}`;
  minuteDisplay.innerText = `${minute}`;
  secondDisplay.innerText = `${second}`;
  ampmDisplay.innerText = `${ampm}`;
}

// Updating time with 1 second interval
setInterval(() => {
  updateClock();
}, 1000);
