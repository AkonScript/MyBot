/**
 * Основной класс от которого наследуются все объекты в игре
 */

class GameObject {  
    constructor() {
        this._time = Game.time;       
    }

}

module.exports = GameObject;