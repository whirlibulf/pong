module.exports = {
    "position": {
        "x": 400,
        "y": 300
    },
    "renderable": {
        "type": "circle",
        "visible": true,
        "zIndex": 2
    },
    "size": {
        "radius": 10
    },
    "color": {
        "fill": "#E21B46"
    },
    "velocity": {
        "x": -200,
        "y": 200
    },
    "script": {
        "scripts": [
            require("../lib/ball.js"),
            require("../lib/collision.js")
        ]
    }
};
