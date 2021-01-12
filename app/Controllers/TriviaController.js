import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

function _drawTrivias() {
    let template = ""
    ProxyState.trivias.forEach(trivia => template += trivia.Template)
    document.getElementById("trivias").innerHTML = template
}

export class TriviaController {
    constructor() {
        ProxyState.on("trivias", _drawTrivias)
    }

    getTrivia(event) {
        event.preventDefault()
        let form = event.target
        let shovel = [
            `?amount=${form.amount.value}`,
            // `&type=boolean`
        ]
        triviaService.getTrivia(shovel.join(""))
    }

    choose(id, i) {
        triviaService.choose(id, i)
    }

}