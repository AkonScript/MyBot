
module.exports.loop = function () {

    let GameManager = require('GameManager');
    let gameManager = new GameManager();    
    
    console.log(gameManager.run());
}