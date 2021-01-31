/**
 * Базовый класс всех крипов. От него наследуются все крипы
 */
let GameObject = require('GameObject');

class GameCreep extends GameObject {
    constructor(creep, room) {
        super(room);
        this._body;
        this._role;
        this._nameCreep;
        this._creep = creep;
    }

    // Проверка соответствует ли крип роли
    isFitRole() {
        if (this._creep.memory.role == this._role) return true;
        else return false;
    }

    // Спавн крипа
    spawn() {
        Game.spawns['Spawn1'].spawnCreep(this._body, this._nameCreep, {
            memory: {
                role: this._role
            }
        });;
        return true;
    }


}

module.exports = GameCreep;