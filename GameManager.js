/**
 * Класс управляет игрой, что надо делать 
 */
let CreepHarvester = require('CreepHarvester');
let CreepCourier = require('CreepCourier');
let GameObject = require('GameObject');
let Plan = require('Plan');

class GameManager extends GameObject {
    constructor(room) {
        super(room)       
    }

    // Спавнит крипов
    spawnCreeps() {   
        console.log(new CreepHarvester("", this._room).count());     
        console.log(new CreepCourier("", this._room).count());     
        new CreepHarvester().spawn();       
        new CreepCourier().spawn();       
        return true;
    }

    // Посылает крипов на работу
    creepsWork() {
        let creeps = this._room.find(FIND_MY_CREEPS);
        creeps.forEach(creep => {           
            new CreepHarvester(creep).work();             
            new CreepCourier(creep).work();             
        });        
    }

    
    run() {
        this.spawnCreeps();
        this.creepsWork();
        return true;

    }
}

module.exports = GameManager;