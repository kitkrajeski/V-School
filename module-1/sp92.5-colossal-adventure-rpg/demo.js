const lib = require('./lib');

const name = lib.getCharacterName();
const character = new lib.Character(name, 100, 7, lib.STARTING_INVENTORY);

while(true){
    // ask user for options
    const chosen = lib.mainPrompt();
    if(chosen === 'q') {
        lib.handleQuit()
        break;
    }
    if(chosen === 'i') {
        // print the list
        character.printInventory()
    }

    if(chosen === 'w'){
        // determine whether there is an enemy
        const enemyAppears = lib.isEnemy();
        if(enemyAppears){
            // handle enemy fight thing
            // create an enemy
            // fight sequence --> deal damage to each other until one is 0
            // if you die --> break
            // if you dont --> pick up inventory
        } else {
            lib.handleNoEnemy()
        }

    }

}

