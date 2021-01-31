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
        const numberHarvesters = new CreepHarvester("", this._room).count();           
        const numberCouriers = new CreepCourier("", this._room).count();           
        
        if (numberHarvesters < new Plan().numberOfHarvesters) {              
            new CreepHarvester().spawn(); 
        }
        if (numberCouriers < new Plan().numberOfCouriers) {            
            new CreepCourier().spawn(); 
        }    
              
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