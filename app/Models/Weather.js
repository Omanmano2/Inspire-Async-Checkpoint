export class Weather{
  constructor(data){
    this.name = data.name
    this.tempature = data.main.feels_like
    this.f = (Math.ceil((this.tempature - 273.15) * (9/5) + (32)))
    this.c = (Math.ceil(this.tempature - 273.15))
    this.icon =  data.weather[0].icon
    this.id = data.id
  }

  get Template() {
    return /*html*/ `
    <div class="col-2 bg-light">
    <div class="row">
      <div class="col-1">
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="weather-icon">
      </div>
      <div class="col-1">
        <p class="selectable" id="tempature" onclick = "app.weatherController.drawWeatherC()">${this.f}F°</p>
      </div>
      <div class="col-1 ms-4">
        <p>${this.name}</p>
      </div>
    </div>
  </div>
    `
  }

  get Template2() {
    return /*html*/ `
    <div class="col-2 bg-light">
    <div class="row">
      <div class="col-1">
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="weather-icon">
      </div>
      <div class="col-1">
        <p class="selectable" id="tempature" onclick = "app.weatherController.drawWeatherF()">${this.c}C°</p>
      </div>
      <div class="col-1 ms-4">
        <p>${this.name}</p>
      </div>
    </div>
  </div>
    `
  }
}

