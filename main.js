
module.exports.loop = function () {

    let GameManager = require('GameManager');
    let gameManager = new GameManager();      
    

    console.log(Room.name);
    console.log(gameManager.run());
}