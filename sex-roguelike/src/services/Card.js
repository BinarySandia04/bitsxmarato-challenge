class Card {

    constructor(card) {
        this.question = card.question;
        this.answer_left = card.answer_left;
        this.answer_right = card.answer_right;
        this.consequences_left = card.consequences_left;
        this.consequences_right = card.consequences_right;
        this.image = card.image;
    }

    getConsequenceAnswer(i) {
        return this.consequences[i];
    }

}

export default Card;