class Player {

    constructor() {
        this.name = "Anònim"
        this.health = 50
        this.mental_health = 50
        this.hornyness = 50
        this.satisfaction = 50
        this.money = 50
        
        this.ganas=false; // de follar
        this.sida=false; //vih
        this.disfuncion=false; //erectil

        this.age = 12;
        this.dying_age = parseInt(Math.random() * 81 + 19);
    }

    AddStats(stats) {
        let normal=true;
        //modificadores
        if('coste' in stats){
            this.money-=stats.coste;
        }
        if('sexo' in stats){
            //Cosa que te de chance de que pase un embarazo??? happens ns
            if(this.singanas){
                
            }
            if(this.disfuncion){
                //aqui un random o algo y puedes fallar en el sexo
            }

        }
        if(normal){
            if(stats.health) {
                this.health += stats.health;
                if (this.health > 100) this.health = 100;
            }
            if(stats.mental_health) this.mental_health += stats.mental_health;
            if(stats.hornyness) this.hornyness += stats.hornyness;
            if(stats.satisfaction) this.satisfaction += stats.satisfaction;
        }
    }
}

export default Player;