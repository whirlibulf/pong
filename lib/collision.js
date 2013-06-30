function getClosestPoint(point, rect) {
    var closest = {
        "x": point.x,
        "y": point.y
    };

    if (point.x > rect.right) {
        closest.x = rect.right;
    }
    if (point.x < rect.left) {
        closest.x = rect.left;
    }
    if (point.y > rect.bottom) {
        closest.y = rect.bottom;
    }
    if (point.y < rect.top) {
        closest.y = rect.top;
    }

    return closest;
}

var rect = {
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
};

module.exports = {
    "update": function (engine, obj, dt) {
        var ballPos,
            ballSize,
            ballVel,
            objPos,
            objSize,
            point,
            size;

        ballPos = engine.get(obj, "position");
        ballSize = engine.get(obj, "size").radius;
        ballVel = engine.get(obj, "velocity");

        objPos = engine.get("player", "position");
        objSize = engine.get("player", "size");

        rect.left = objPos.x;
        rect.right = objPos.x + objSize.width;
        rect.top = objPos.y;
        rect.bottom = objPos.y + objSize.height;

        point = getClosestPoint(ballPos, rect);
        distance = Math.pow(point.x - ballPos.x, 2) + Math.pow(point.y - ballPos.y, 2);
        if (distance < ballSize * ballSize) {
            ballVel.x = Math.abs(ballVel.x);
        }

        objPos = engine.get("computer", "position");
        objSize = engine.get("computer", "size");

        rect.left = objPos.x;
        rect.right = objPos.x + objSize.width;
        rect.top = objPos.y;
        rect.bottom = objPos.y + objSize.height;

        point = getClosestPoint(ballPos, rect);
        distance = Math.pow(point.x - ballPos.x, 2) + Math.pow(point.y - ballPos.y, 2);
        if (distance < ballSize * ballSize) {
            ballVel.x = -Math.abs(ballVel.x);
        }
    }
};
