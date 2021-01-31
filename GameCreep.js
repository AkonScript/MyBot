/**
 * Базовый класс всех крипов. От него наследуются все крипы
 */
let GameObject = require('GameObject');

class GameCreep extends GameObject {
    constructor(name) { 
        super();         
        this._nameCreep = name + this._time; 
        this._body = [];        
    }
    spawn() {
        Game.spawns['Spawn1'].spawnCreep(this._body, this._nameCreep);
        return true;
    }

}

module.exports = GameCreep;