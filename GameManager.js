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
        super(room);
        this._plan = new Plan(); 
        this._creepUpgrader = new CreepUpgrader("",this._room);      
        this.creepHarvester = new CreepHarvester("",this._room);      
        this._creepCourier = new CreepCourier("",this._room);      
    }    

    // Спавнит крипов
    spawnCreeps() {  
        
        if (this._creepUpgrader.count() < this._plan.numberOfUpgrader) {            
            this._creepUpgrader.spawn(); 
        }    
        if (this._creepCourier.count() < this._plan.numberOfCouriers) {            
            this._creepCourier.spawn(); 
        }    
        if (this.creepHarvester.count() < this._plan.numberOfHarvesters) {              
            this.creepHarvester.spawn(); 
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