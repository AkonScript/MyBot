/**
 * Базовый класс всех крипов. От него наследуются все крипы
 */
let GameObject = require('GameObject');

class GameCreep extends GameObject {
    constructor(name) { 
        super();         
        this._nameCreep; 
        this._body;
        this._role;        
    }

    spawn() {
        Game.spawns['Spawn1'].spawnCreep(this._body, this._nameCreep, {
            memory: {role: this._role}
        });;
        return true;
    }  


}

module.exports = GameCreep;