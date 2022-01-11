import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"


function _drawWeatherC() {
const weather = ProxyState.weather
console.log('weather', weather.Template)
document.getElementById('weatherArea').innerHTML = weather.Template
}

function _drawWeatherF() {
  const weather = ProxyState.weather
  console.log('weather', weather.Template2)
  document.getElementById('weatherArea').innerHTML = weather.Template2
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
    ProxyState.on('weather', _drawWeatherC)
    _getWeather()
  }
  
  drawWeatherC(){
    _drawWeatherF()
  }

  drawWeatherF(){
    _drawWeatherC()
  }
  
}


