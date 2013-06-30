var rect = {
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
};

var point = {
    "x": 0,
    "y": 0
};

module.exports = {
    "update": function (engine, obj, dt) {
        var ballPos,
            ballSize,
            ballVel,
            objPos,
            objSize;

        ballPos = engine.get("ball", "position");
        ballSize = engine.get("ball", "size").radius;
        ballVel = engine.get("ball", "velocity");

        objPos = engine.get(obj, "position");
        objSize = engine.get(obj, "size");

        rect.left = objPos.x + objSize.width / 2;
        rect.right = objPos.x + objSize.width / 2;
        rect.top = objPos.y;
        rect.bottom = objPos.y + objSize.height;

        point.x = ballPos.x;
        point.y = ballPos.y;

        if (ballPos.x > rect.right) {
            point.x = rect.right;
        }
        if (ballPos.x < rect.left) {
            point.x = rect.left;
        }
        if (ballPos.y > rect.bottom) {
            point.y = rect.bottom;
        }
        if (ballPos.y < rect.top) {
            point.y = rect.top;
        }

        distance = Math.pow(point.x - ballPos.x, 2) + Math.pow(point.y - ballPos.y, 2);
        if (distance < ballSize * ballSize) {
            ballVel.x *= -1;
        }
    }
};
