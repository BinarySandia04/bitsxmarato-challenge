class Card {

    constructor(question, answers, consequences) {
        this.question = question;
        this.answers = answers;
        this.consequences = consequences;
    }

    getConsequenceAnswer(i) {
        return this.consequences[i]
    }

}