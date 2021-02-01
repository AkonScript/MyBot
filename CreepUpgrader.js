/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('CreepHarvester');
 * mod.thing == 'a thing'; // true
 */
let GameCreep = require('GameCreep');

class CreepUpgrader extends GameCreep {
    constructor(creep, room) {
        super(creep, room);
        this._body = [CARRY, WORK, MOVE];
        this._role = "Upgrader";
        this._nameCreep = this._role + this._time;
    }   

    work() {
        if (this.isFitRole()) {
            const target = this._creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if (this._creep.pickup(target) == ERR_NOT_IN_RANGE && this._creep.store[RESOURCE_ENERGY] == 0) {
                this._creep.moveTo(target);
            } else {
                var targ = this._room.find(FIND_STRUCTURES, { filter: { structureType: STRUCTURE_CONTROLLER } })[0];
                if (this._creep.upgradeController(targ) == ERR_NOT_IN_RANGE) {
                    this._creep.moveTo(targ);
                }
            }
            return true;
        }
        return false;

    }
}

module.exports = CreepUpgrader;