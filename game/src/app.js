var PIXI = require('pixi.js');
var QuickShape = require('../libs/quick-shape');

module.exports = function() {
    this.name = 'App';
    this.stage = new PIXI.Container();

    this.renderer = PIXI.autoDetectRenderer(800, 600, {
        backgroundColor: 0x0000FF,
        antialias: false
    });
    this.view = this.renderer.view;
    this.view.style.position = 'absolute';
    window.WEBGL = PIXI.isWebGL = (this.renderer instanceof PIXI.WebGLRenderer);
    document.body.appendChild(this.renderer.view);

    var shape = QuickShape.Square(0xFF00FF, 20, 20);
    this.stage.addChild(shape)
    shape.position.set(10, 10)

    this.update = function() {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.updateBind);
    }
    
    this.updateBind = this.update.bind(this);    
    this.update();
}
