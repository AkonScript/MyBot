/**
 * Основной класс от которого наследуются все объекты в игре
 */

class GameObject {  
    constructor(room) {
        this._time = Game.time;   
        this._room = room;    
    }

}

module.exports = GameObject;