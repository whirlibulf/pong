var engine = require("engine");
var Stats = require("stats.js-system");
var Canvas = require("2d-canvas-system");

var game = new engine.Game();

game.use(new Stats());
game.use(new Canvas({
    element: document.getElementById('game'),
    width: 800,
    height: 600,
    retina: true
}));

game.use("position", require("position-component"));
game.use("renderable", require("renderable-component"));
game.use("size", require("size-component"));
game.use("color", require("color-component"));

game.create("background", {
    "position": {
        "x": 0,
        "y": 1
    },
    "renderable": {
        "type": "rectangle",
        "visible": true,
        "zIndex": 0
    },
    "size": {
        "width": 800,
        "height": 600
    },
    "color": {
        "fill": "#333333"
    }
});

game.create("player", {
    "position": {
        "x": 20,
        "y": 20
    },
    "renderable": {
        "type": "rectangle",
        "visible": true,
        "zIndex": 1
    },
    "size": {
        "width": 20,
        "height": 100
    },
    "color": {
        "fill": "#3366FF"
    }
});

game.start();
