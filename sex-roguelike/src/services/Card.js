class Card {

    constructor(question, answer_left, answer_right, consequences_left, consequences_right) {
        this.question = question;
        this.answers_left = answers_left;
        this.answers_right = answer_right;
        this.consequences_left = consequences_left;
        this.consequences_right = consequences_right;
    }

    getConsequenceAnswer(i) {
        return this.consequences[i];
    }

}