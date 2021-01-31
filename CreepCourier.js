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
    constructor(creep, room) {
        super(creep, room);
        this._body = [CARRY, CARRY, MOVE];
        this._role = "Courier";
        this._nameCreep = this._role + this._time;
    }

    work() {
        if (this.isFitRole()) {
            const target = this._creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if (target) {
                if (this._creep.pickup(target) == ERR_NOT_IN_RANGE && this._creep.store[RESOURCE_ENERGY] == 0) {
                    this._creep.moveTo(target);
                } else {
                    const targetSpawn = this._creep.pos.findClosestByRange(FIND_MY_SPAWNS);
                    if (target) {
                        if (this._creep.transfer(targetSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) this._creep.moveTo(targetSpawn);
                    }
                }
            }
            return true;
        }
        return false;

    }
}

module.exports = CreepCourier;