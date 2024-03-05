const readlineSync = require("readline-sync")

const youAreHere = readlineSync.question("Welcome to the dungeon. At some point, maybe now, maybe later, you will be dead. And not in bed peacefully. What is your name, dead one? ");
const readyToDie = readlineSync.question(`Ok ${youAreHere}icus, are you ready to meet your maker? Yes or no? `);
let diggingTunnels = false;
if (readyToDie.toLowerCase() === "yes") {
    diggingTunnels = true;
}
class Character {
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    printInventory() {
        console.log(`Name: ${youAreHere}icus`);
        console.log(`Inventory: ${this.inventory}`);
    }
}

let playerInventory = ["morning star", " crossbow", " pocket trebuchet"];
const hero = new Character(youAreHere, 1000, 25, playerInventory);
const enemy1 = new Character("a Goblin named Gobbie", 25, 1, [" bow", " axe"]);
const enemy2 = new Character("a Kobold named Kobbie", 45, 10, [" flail", " knife"]);
const enemy3 = new Character("a Fucking Dragon", 1000, 100, ["claws"]);
let enemies = [enemy1 , enemy2, enemy3] 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (diggingTunnels === true) {
    const doomTime = readlineSync.question("You enter a cold dark tunnel that smells of certain doom and your own fear. Do you wish to walk [w], check your inventory [i], or run away [q]? ", { limit: ["w", "i", "q"] })
    if (doomTime === "w") {
        let enemyCheck = getRandomNumber(1, 4);
        if (enemyCheck === 2) {
            let whoGonnaKillYa = enemies[getRandomNumber(0, enemies.length - 1)];
            console.log(`You encounter ${whoGonnaKillYa.name}, at which point, you do, indeed, piss yourself. A number two is close behind.`);
            const decisions = ["'Stand aside worthy adversary, I am not afarid!'", "Bravely runaway"];
            const overNowBabyBlue = readlineSync.keyInSelect(decisions, "Your enemy laughs derisively at your wet legs. What do you wish to do?");
            let deathToy;
            if (overNowBabyBlue === 0) {
                deathToy = readlineSync.keyInSelect(hero.inventory, "What do you want to have in your hands when you die?");
                if (deathToy === 2) {
                    console.log("While taking the inordinate amount of time required to set up a pocket trebuchet, you are eaten by a flock of subterranean griffins and wish you had not died with shit in your pants.")
                    break;
                }
                else {
                    // let heroHp = hero.healthPoints;
                    // let enemyHp = whoGonnaKillYa.healthPoints;
                    // while (heroHp > 0 && enemyHp > 0) {
                    //     let heroAp = getRandomNumber(0, hero.attackPoints);
                    //         console.log(`${youAreHere}icus dealt ${heroAp} points of damage!`);
                    //     let enemyAp = getRandomNumber(0, whoGonnaKillYa.attackPoints);
                    //         console.log(`${whoGonnaKillYa.name} dealt ${enemyAp} points of damage!`);
                    //         // console.log(`${whoGonnaKillYa} dealt ${enemyAp} points of damage!`);
                    //     heroHp -= enemyAp;
                    //     enemyHp -= heroAp;                   
                    //     if (heroHp <= 0) {
                    //         console.log(`In a moment of clumsiness, you slip on your own fecal matter and ${whoGonnaKillYa.name} seizes on the opportunity to smash your face in. Your last thought is wishing you hadn't died with shit in your pants.`)
                    //         diggingTunnels = false;
                    //         break;
                    //     } 
                    //     if (enemyHp <= 0) {
                    //         console.log("Completely horrified by the smell of emptied bowels, your opponent is momentarily distracted and you smash their face in. You search their corpse for items and use their ragged clothing to clean yourself.")
                    //         hero.inventory = [...hero.inventory, ...whoGonnaKillYa.inventory];
                    //         enemies = enemies.filter(enemy => enemy !== whoGonnaKillYa)
                    //         break;
                    //     }
                    fight(whoGonnaKillYa);
                    // }
                }
            }
            else {
                const bravelyRunaway = getRandomNumber(1, 2);
                if (bravelyRunaway === 1) {
                    console.log("While running away, you slip on a puddle of your own urine and smash your face in. At least you did not die with shit in your pants.");
                    break;
                }
                else {
                    console.log("Your pursuing enemy slips in the puddle of urine you left, allowing your swift escape.");
                }
            }
        }
        else {
            console.log("You walk farther, and get a little closer to pissing yourself.")
        }
    }
    if (doomTime === "i") {
        hero.printInventory();
    }
    else if (doomTime === "q") {
        console.log("Your cowardice is wise, you yellow bellied chicken.");
        diggingTunnels = false;
    }
};

function fight(whoGonnaKillYa) {
    while (hero.healthPoints > 0 && whoGonnaKillYa.healthPoints > 0) {
        let heroAp = getRandomNumber(0, hero.attackPoints);
        let enemyAp = getRandomNumber(0, whoGonnaKillYa.attackPoints);
        hero.healthPoints -= enemyAp;
        console.log(`${whoGonnaKillYa.name} dealt ${enemyAp} points of damage!`)
        whoGonnaKillYa.healthPoints -= heroAp;
        console.log(`${hero.name} dealt ${heroAp} points of damage!`)
        if (hero.healthPoints <= 0) {
            console.log(`In a moment of clumsiness, you slip on your own fecal matter and ${whoGonnaKillYa.name} seizes on the opportunity to smash your face in. You wish you had not died with shit in your pants.`)
            diggingTunnels = false;
            break;
        }
        if (whoGonnaKillYa.healthPoints <= 0) {
            console.log("Completely horrified by the smell of emptied bowels, your opponent is momentarily distracted and you smash their face in. You search their corpse for items and use their ragged clothing to clean yourself.")
            hero.inventory = [...hero.inventory, ...whoGonnaKillYa.inventory];
            enemies = enemies.filter(enemy => enemy !== whoGonnaKillYa)
            break;
        }
    }
}

