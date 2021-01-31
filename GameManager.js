/**
 * Класс управляет игрой, что надо делать 
 */
let CreepHarvester = require('CreepHarvester')
class GameManager 
{   
    spawn() {
        let creepHarvester = new CreepHarvester();
        creepHarvester.spawn();
        return true;
    }

    run() {        
        this.spawn();
        return true;
    }
}

module.exports = GameManager;