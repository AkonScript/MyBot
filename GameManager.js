/**
 * Класс управляет игрой, что надо делать 
 */
let CreepHarvester = require('CreepHarvester');
let CreepCourier = require('CreepCourier');
let CreepUpgrader = require('CreepUpgrader');
let GameObject = require('GameObject');
let Plan = require('Plan');

class GameManager extends GameObject {
    constructor(room) {
        super(room)       
    }

    // Спавнит крипов
    spawnCreeps() {  
        
        if (new CreepUpgrader("", this._room).count() < new Plan().numberOfUpgrader) {            
            new CreepUpgrader().spawn(); 
        }    
        if (new CreepHarvester("", this._room).count() < new Plan().numberOfCouriers) {            
            new CreepCourier().spawn(); 
        }    
        if (new CreepCourier("", this._room).count() < new Plan().numberOfHarvesters) {              
            new CreepHarvester().spawn(); 
        }
              
        return true;
    }

    // Посылает крипов на работу
    creepsWork() {
        let creeps = this._room.find(FIND_MY_CREEPS);
        creeps.forEach(creep => {           
            new CreepHarvester(creep, this._room).work();             
            new CreepUpgrader(creep, this._room).work();             
            new CreepCourier(creep, this._room).work();             
        });        
    }

    
    run() {
        this.spawnCreeps();
        this.creepsWork();
        return true;
    }
}

module.exports = GameManager;