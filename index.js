var engine = require("engine");
var Stats = require("stats.js-system");
var Canvas = require("2d-canvas-system");
var Keyboard = require("keyboard-system");

var game = new engine.Game();

game.use(new Stats());
game.use(new Canvas({
    element: document.getElementById('game'),
    width: 800,
    height: 600,
    retina: true
}));
game.use(new Keyboard({
    stop: ['up', 'down', 'left', 'right']
}));

game.use("position", require("position-component"));
game.use("renderable", require("renderable-component"));
game.use("size", require("size-component"));
game.use("color", require("color-component"));

game.create("background", require("./objects/background.js"));
game.create("player", require("./objects/player.js"));

game.start();
