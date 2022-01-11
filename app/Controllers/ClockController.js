function drawTime() {

  setInterval(() => {
    const time = new Date()
    const hour = (time.getHours() % 12)
    const minute = (time.getMinutes())
    if (hour == 0 && minute < 10) {
      const clock = (hour + 12) + ':' + ('0' + minute)
      document.getElementById('clockArea').innerHTML = clock
    }

    if (minute < 10) {
      const clock = (hour) + ':' + ('0' + minute)
      document.getElementById('clockArea').innerHTML = clock
    } else {
      const clock = hour + ':' + minute
      document.getElementById('clockArea').innerHTML = clock
    }



  }, 1000);
}
export class ClockController {
  constructor() {
    drawTime()
  }
}

