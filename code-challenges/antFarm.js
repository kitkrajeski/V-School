let foodHeap = 0;

const addDaFood = (amount) => {
    foodHeap += amount
    console.log(foodHeap)
}

const eatDaFood = (amount) => {
    foodHeap -= amount

}

class Ant {
    constructor() {
        setInterval(this.forage, 4000);
        setInterval(this.consume, 4000);
    }

    forage(){
        addDaFood(Math.floor((Math.random() * 3) + 1))
    }
    consume(){
        eatDaFood(Math.floor((Math.random() * 7) + 1))
    }
}

class QueenAnt extends Ant {
    constructor() {
        super();
        this.ants = [];
        setInterval(() => {this.spawnDaAnt()}, 2000)
    }
    consume(){
        if (foodHeap <= 0){
            this.ants = [];
            console.log("ants died because there wasn't enough food")
        }
    }
    spawnDaAnt() {
        this.ants.push(new Ant);  
        console.log("ants: " + this.ants.length)   
    }    
}

const joaquin = new Ant();

const joaqwueen = new QueenAnt();

console.log(joaqwueen)