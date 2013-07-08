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
    "update": function (obj, dt) {
        var ballPos,
            ballSize,
            ballVel,
            objPos,
            objSize,
            distance;

        ballPos = this.get("ball", "position");
        ballSize = this.get("ball", "size").radius;
        ballVel = this.get("ball", "velocity");

        objPos = this.get(obj, "position");
        objSize = this.get(obj, "size");

        rect.left = objPos.x;
        rect.right = objPos.x + objSize.width;
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
            if (obj === "player") {
                ballVel.x = Math.abs(ballVel.x);
            } else {
                ballVel.x = -Math.abs(ballVel.x);
            }
        }
    }
};
