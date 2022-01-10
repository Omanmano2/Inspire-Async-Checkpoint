import { ImagesController } from "./Controllers/ImagesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController

  imagesController = new ImagesController
}

window["app"] = new App();
