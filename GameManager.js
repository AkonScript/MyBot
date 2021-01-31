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

        for (var creep in Memory.creeps) {
            let creepHarvester = new CreepHarvester(creep); 
            creepHarvester.work();
            console.log(creep);
        }

    }

    run() {
        this.spawn();
        this.creepsWork();
        return true;
    }
}

module.exports = GameManager;