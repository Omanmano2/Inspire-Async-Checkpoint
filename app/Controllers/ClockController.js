function drawTime() {

  setInterval(() => {
    const time = new Date()
    console.log(time.getHours() % 12)
    console.log(time.getMinutes())
    const hour = (time.getHours() % 12)
    const minute = (time.getMinutes())
    if (minute < 10) {
      minute = ('0'+ minute)
    } else {
      minute + 0
    }
    const clock = hour + ':' + minute
    document.getElementById('clockArea').innerHTML = clock
  }, 10000);
} 
export class ClockController {
  constructor() {
    drawTime()
  }
}

