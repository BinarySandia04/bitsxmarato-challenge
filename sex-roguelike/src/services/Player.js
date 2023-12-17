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
        if('sexo' in stats){
            //Cosa que te de chance de que pase un embarazo??? happens ns
            if(this.singanas){
                normal=false;
                this.satisfaction-=stats.satisfaction;
                this.mental_health-=stats.mental_health;
            }
            if(this.disfuncion){
                //aqui un random o algo y si da que follas mal pues happens ns
            }

        }
        if('porno' in stats){
            //pajero
        }
        if(normal){
        this.health += stats.health;
        this.mental_health += stats.mental_health;
        this.hornyness += stats.hornyness;
        this.satisfaction += stats.satisfaction;
        }
    }
}

export default Player;