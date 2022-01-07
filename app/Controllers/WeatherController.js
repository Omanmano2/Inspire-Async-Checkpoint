import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _drawWeather() {
  
}

export class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }
}


