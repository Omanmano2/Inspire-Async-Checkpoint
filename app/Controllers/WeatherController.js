import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _drawWeather() {
const weather = ProxyState.weather
console.log('weather', weather.Template)
document.getElementById('weatherArea').innerHTML = weather.Template
}


async function _getWeather() {
  try {
    await weatherService.getApiWeather()
  } catch (error) {
    console.error(error)
  }
}

export class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    _getWeather()
  }

}


