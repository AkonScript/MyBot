/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('GamePlane');
 * mod.thing == 'a thing'; // true
 */

class Plan {
    constructor() {
        this._numberOfHarvesters = 2;
        this._numberOfCouriers = 2;
    }

    get numberOfHarvesters() {
        return this._numberOfHarvesters;
    }
    get numberOfCouriers() {
        return this._numberOfCouriers;
    }
}

module.exports = Plan;