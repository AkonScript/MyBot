/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('CreepHarvester');
 * mod.thing == 'a thing'; // true
 */
let GameCreep = require('GameCreep');

class CreepHarvester extends GameCreep {  
    constructor(creep, room) {
        super(creep, room);
        this._body = [WORK, WORK, MOVE];
        this._role = "Harvester";
        this._nameCreep = this._role + this._time;
    }
    
    work() {
        if (this.isFitRole()) {
            const target = this._creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if (target) {
                if (this._creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    this._creep.moveTo(target);
                }
            }
            return true;
        }
        return false;
    }
}

module.exports = CreepHarvester;