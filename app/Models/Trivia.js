export default class Trivia {
    constructor({ type, question, correct_answer, incorrect_answers }, i) {
        this.type = type
        this.question = question
        this.answers = incorrect_answers.map(answer => {
            return {
                answer: answer,
                correct: false
            }
        })
        this.id = i
        this.shuffleAnswers(correct_answer)
    }

    shuffleAnswers(correct_answer) {
        let random = Math.floor(Math.random() * 4)
        this.answers.splice(random, 0, {
            answer: correct_answer,
            correct: true
        })
    }

    get Template() {
        return /*html*/`
        <div>
        ${this.question}
        </div>
        <div>
        ${this.Answers}
        </div>
        `
    }

    get Answers() {
        let template = ""
        this.answers.forEach((obj, i) => template += /*html*/`
            <button
            class="choice"
            type="button"
            onclick="app.triviaController.choose(${this.id}, ${i})" >
            ${obj.answer}
            </button>
        `)
        return template
    }
}