const readlineSync = require("readline-sync");

function getCharacterName () {
    return readlineSync.question('What is your name? ');
}

class Character {
    constructor(name, healthPoints, attackPoints, inventory) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.inventory = inventory;
    }
    printInventory() {
        console.log(`Name: ${this.name}icus`);
        console.log(`Inventory: ${this.inventory}`);
    }
}

const STARTING_INVENTORY =  ["morning star", " crossbow", " pocket trebuchet"];

function mainPrompt (){
    return readlineSync.question('[w] walk\n[i] inventory \n[q] quit ')
}

function handleQuit () {
    console.log('Game over quitter');
}

function isEnemy(){
    return Math.random() < .25
}

function handleNoEnemy () {
    console.log('all clear...')
}

module.exports = {
    Character,
    getCharacterName,
    STARTING_INVENTORY,
    mainPrompt,
    handleQuit,
    isEnemy,
    handleNoEnemy
}