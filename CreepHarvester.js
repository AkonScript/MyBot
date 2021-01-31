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
    constructor(creep) {
        super();
        this._nameCreep = "Harvester" + this._time;
        this._body = [WORK, CARRY, MOVE];
        this._role = "Harvester";
        this._creep = creep;
    }

    work() {
        const target = this._creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (target) {
            if (this._creep.harvest(target) == ERR_NOT_IN_RANGE) {
                this._creep.moveTo(target);
            }
        }
        return true;
    }
}

module.exports = CreepHarvester;