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
        "x": 100,
        "y": 100
    },
    "script": {
        "scripts": [require("../lib/ball.js")]
    }
};
