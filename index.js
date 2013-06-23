var engine = require("engine");
var Stats = require("stats.js-system");
var Canvas = require("2d-canvas-system");
var Keyboard = require("keyboard-system");
var Script = require("script-system");

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
game.use(new Script());

game.use("position", require("position-component"));
game.use("renderable", require("renderable-component"));
game.use("size", require("size-component"));
game.use("color", require("color-component"));
game.use("script", require("script-component"));

game.create("background", require("./objects/background.js"));
game.create("player", require("./objects/player.js"));
game.create("computer", require("./objects/computer.js"));

game.start();
