import { ClockController } from "./Controllers/clockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new WeatherController

  imagesController = new ImagesController

  clockController = new ClockController

  quoteController = new QuoteController

  toDoController = new ToDoController
}

window["app"] = new App();
