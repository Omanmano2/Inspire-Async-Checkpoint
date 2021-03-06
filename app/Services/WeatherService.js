import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"




class WeatherService{
  async getApiWeather() {
    const res = await sandboxApi.get('weather')
    console.log(res.data)
    ProxyState.weather = new Weather(res.data)
  }
  
}

export const weatherService = new WeatherService()