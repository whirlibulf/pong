var engine = require("engine");
var Stats = require("stats.js-system");
var Canvas = require("2d-canvas-system");
var Keyboard = require("keyboard-system");
var Script = require("script-system");
var Kinematics = require("kinematics-system");

var game = new engine.Game();

game.config("fps", 60);

game.config("canvas", {
    element: document.getElementById('game'),
    width: 800,
    height: 600,
    retina: true
});

game.config("keyboard", {
    stop: ['up', 'down', 'left', 'right']
});

game.use(require("stats.js-system"));
game.use(require("2d-canvas-system"));
game.use(require("keyboard-system"));
game.use(require("kinematics-system"));
game.use(require("script-system"));

game.use("position", require("position-component"));
game.use("renderable", require("renderable-component"));
game.use("size", require("size-component"));
game.use("color", require("color-component"));
game.use("script", require("script-component"));
game.use("velocity", require("velocity-component"));

game.create("background", require("./objects/background.js"));
game.create("player", require("./objects/player.js"));
game.create("computer", require("./objects/computer.js"));
game.create("ball", require("./objects/ball.js"));

game.start();
