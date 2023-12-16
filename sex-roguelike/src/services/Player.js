class Player {

    constructor() {
        this.name = "Default"
        this.health = 50
        this.mental_health = 50
        this.hornyness = 50
        this.satisfaction = 50
        this.money = 50
    }

    AddStats(stats) {
        this.health += stats.health;
        this.mental_health += stats.mental_health;
        this.hornyness += stats.hornyness;
        this.satisfaction += stats.satisfaction;
    }
}

export default Player;