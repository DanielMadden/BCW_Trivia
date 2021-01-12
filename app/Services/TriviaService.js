import { ProxyState } from "../AppState.js"
import Trivia from "../Models/Trivia.js"
import { triviaAPI } from "./AxiosService.js"

class TriviaService {
    async getTrivia(shovel) {
        let res = await triviaAPI.get(shovel)
        ProxyState.trivias = res.data.results.map((obj, i) => new Trivia(obj, i))
        console.log(ProxyState.trivias)
    }

    choose(id, i) {
        alert(ProxyState.trivias.find(trivia => trivia.id == id).answers[i].correct)
    }
}

export const triviaService = new TriviaService()