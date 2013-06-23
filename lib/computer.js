var ball, position, size;

module.exports = {
    "update": function (engine, obj, dt) {
        ball = engine.get("ball", "position");
        position = engine.get(obj, "position");
        size = engine.get(obj, "size");

        if (position.y + size.height / 2 < ball.y) {
            position.y += 3;
            if (position.y + size.height > 600) {
                position.y = 600 - size.height;
            }
        }

        if (position.y + size.height / 2 > ball.y) {
            position.y -= 3;
            if (position.y < 0) {
                position.y = 0;
            }
        }
    }
};
