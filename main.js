module.exports.loop = function () {

    for (var name in Game.rooms) {
        var room = Game.rooms[name];
        let GameManager = require('GameManager');
        new GameManager(room).run();        
    }
}

