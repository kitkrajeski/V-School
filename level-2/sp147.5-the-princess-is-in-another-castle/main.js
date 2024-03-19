class Character {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    setName(namePicked) {
        if (namePicked === "mario" || namePicked === "luigi") {
            this.name = namePicked; 
        } else {
            console.log("Name must be either 'mario' or 'luigi'.")
        }
    }
    gotHit() {
        if (this.hasStar) {
            console.log("Your star protected you!");
            this.hasStar = false;
            return;
        } else {
            switch (this.status) {
                case "PoweredUp":
                    this.status = "Big";
                    break;
                case "Big":
                    this.status = "Small";
                    break;
                case "Small":
                    this.status = "Dead";
                    break;
                default:
                    console.log("The character is already dead!");
            }
        }
    }
    gotPowerUp() {
        if (this.hasStar) {
            console.log("You already have a star!");
            return;
        } else {
            switch (this.status) {
                case "Small":
                    this.status = "Big";
                    break;
                case "Big":
                    this.status = "PoweredUp";
                    break;
                default:
                    this.hasStar = true;
                    console.log("You got a star!");
                    break;
            }
        }
    }
    addCoin() {
        this.totalCoins ++;
    }
    print() {
        console.log({
            Name: this.name,
            TotalCoins: this.totalCoins,
            Status: this.status,
            Star: this.hasStar
        });
    }
}

const mario = new Character("mario", 0, "Big", false);
mario.print();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let gameInterval = setInterval(() => {
    let action = getRandom(0, 3);
    switch (action) {
        case 0:
            mario.gotHit();
            break;
        case 1:
            mario.gotPowerUp();
            break;
        case 2:
            mario.addCoin();
            break;
    }
    mario.print();

    if (mario.status === "Dead") {
        console.log("Game over!");
        clearInterval(gameInterval);
    }        
}, 1000);


const person = {name: 'ben', age: 35, siblings: [{name: 'chris', age: 29}]};

// const {name, ...rest} = person;
const {siblings: [brother], ...rest} = person;

const doThing = (name, ...args) => {}

const arr = [...someArray, thing]