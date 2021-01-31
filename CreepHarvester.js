/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('CreepHarvester');
 * mod.thing == 'a thing'; // true
 */
let GameCreep = require('GameCreep');

class CreepHarvester extends GameCreep 
{
    constructor() {
        super();
        this._nameCreep = "Harvester" + this._time;
        this._body = [WORK, CARRY, MOVE];
    }
}

module.exports = CreepHarvester;