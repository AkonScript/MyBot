/**
 * Класс управляет игрой, что надо делать 
 */
let CreepHarvester = require('CreepHarvester')
class GameManager {
    constructor() {
        this.room = Game.rooms[0];
    }
    spawn() {
        let creepHarvester = new CreepHarvester();
        creepHarvester.spawn();
        return true;
    }

    creepsWork() {

        for (var nameCreep in Game.creeps) {
            console.log(nameCreep);
            let creepHarvester = new CreepHarvester(Game.creeps[nameCreep]); 
            creepHarvester.work();
           
        }

    }

    run() {
        this.spawn();
        this.creepsWork();
        return true;
    }
}

module.exports = GameManager;