import { TriviaController } from "./Controllers/TriviaController.js";

class App {
    triviaController = new TriviaController()
}

window["app"] = new App();
