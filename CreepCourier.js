/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('CreepHarvester');
 * mod.thing == 'a thing'; // true
 */
let GameCreep = require('GameCreep');

class CreepCourier extends GameCreep {
    constructor(creep) {
        super(creep);        
        this._body = [CARRY, CARRY, MOVE];
        this._role = "Courier";    
        this._nameCreep = this._role + this._time;     
    }

    work() {
        
    }
}

module.exports = CreepHarvester;