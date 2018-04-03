console.warn('I am self aware');

var end;

function getTimeRemaining(end) {
  var t = end - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id) {
  end = new Date();
  end.setMinutes(end.getMinutes() + 3);
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(end);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.minutes <= 0 && t.seconds <= 30) {
      document.getElementById(id).classList.add('red');
    }

    if (t.total <= 1000) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 300);
}

document.addEventListener("keypress", (event) => {
  initializeClock('clockdiv');
});