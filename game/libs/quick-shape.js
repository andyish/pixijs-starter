var PIXI = require('pixi.js');

module.exports.Square = function(color, w, h) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(color);
    graphics.drawRect(0, 0, w || 1, h || 1);

    return graphics;
}

module.exports.Box = function(color, w, h) {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(1, color);
    graphics.beginFill(color * 0.1);
    graphics.drawRect(0, 0, w || 1, h || 1);

    return graphics
}