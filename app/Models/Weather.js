export class Weather{
  constructor(data){
    this.name = data.name
    this.tempature = data.main.feels_like
    this.icon =  data.weather.icon
  }

  get Template() {
    return /*html*/ `
    <div class="col-1">
    <div class="row me-0">
      <div class="col-1">
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="weather-icon">
      </div>
      <div class="col-1">
        <p>${(this.tempature - 273.15) * (9/5) + 32}°</p>
      </div>
      <div class="col-1 ms-4">
        <p>${this.name}</p>
      </div>
    </div>
  </div>

    `
  }
}