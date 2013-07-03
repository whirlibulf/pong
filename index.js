var engine = require("engine");

var game = engine.Boot({
    "config": {
        "fps": 60,
        "canvas": {
            "element": document.getElementById("game"),
            "width": 800,
            "height": 600,
            "retina": true
        },
        "keyboard": {
            "stop": [
                "up",
                "down",
                "left",
                "right"
            ]
        }
    },
    "systems": [
        require("stats.js-system"),
        require("2d-canvas-system"),
        require("keyboard-system"),
        require("kinematics-system"),
        require("script-system")
    ],
    "components": {
        "position":     require("position-component"),
        "renderable":   require("renderable-component"),
        "size":         require("size-component"),
        "color":        require("color-component"),
        "script":       require("script-component"),
        "velocity":     require("velocity-component")
    },
    "entities": {
        "background":   require("./entities/background.js"),
        "player":       require("./entities/player.js"),
        "computer":     require("./entities/computer.js"),
        "ball":         require("./entities/ball.js")
    }
});

game.start(game.config("fps"));



/*
 * We could also split the data into individual files for even more organization!

var game = engine.Boot({
    "config":       require("./data/config.js"),
    "systems":      require("./data/systems.js"),
    "components":   require("./data/components.js"),
    "entities":     require("./data/entities.js")
});
*/



/*
 * If you were to create the game object procedurally, here's how you could do it:

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
*/
