/**
 * Класс управляет игрой, что надо делать 
 */
let CreepHarvester = require('CreepHarvester');
let GameObject = require('GameObject');

class GameManager extends GameObject {
    constructor(room) {
        super()
        this._room = room;
    }
    spawnCreeps() {
        let creepHarvester = new CreepHarvester();
        creepHarvester.spawn();
        return true;
    }

    creepsWork() {
        let creeps = this._room.find(FIND_MY_CREEPS);
        creeps.forEach(creep => {
            console.log(creep);
            let creepHarvester = new CreepHarvester(creep); 
            creepHarvester.work(); 
        });        
    }

    run() {
        this.spawnCreeps();
        this.creepsWork();
        return true;

    }
}

module.exports = GameManager;