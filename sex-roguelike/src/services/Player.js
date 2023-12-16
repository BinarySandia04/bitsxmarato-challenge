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

        if(this.health > 100 || this.health < 0){
            alert("IMBECIL FRIKI QUE ASCO QUE DAS");
        }

        this.mental_health += stats.mental_health;

        if(this.mental_health > 100 || this.mental_health < 0){
            alert("DANIASUN LO HARIA MEJOR");
        }
        this.hornyness += stats.hornyness;
        if(this.hornyness > 100 || this.hornyness < 0){
            alert("IMBECIL FRIKI QUE ASCO QUE DAS");
        }
        this.satisfaction += stats.satisfaction;
        if(this.satisfaction > 100 || this.satisfaction < 0){
            alert("IMBECIL FRIKI QUE ASCO QUE DAS");
        }
    }

}

export default Player;