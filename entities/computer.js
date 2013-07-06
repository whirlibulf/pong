module.exports = {
    "position": {
        "x": 760,
        "y": 250
    },
    "velocity": {
        "x": 0,
        "y": 0
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
        "fill": "#D9F249"
    },
    "script": {
        "scripts": [
            require("../scripts/ai.js"),
            require("../scripts/paddleCollision.js")
        ]
    }
};
