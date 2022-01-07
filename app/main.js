import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController
}

window["app"] = new App();
