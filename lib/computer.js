var ball, position, size, velocity;

module.exports = {
    "update": function (engine, obj, dt) {
        ball = engine.get("ball", "position");
        position = engine.get(obj, "position");
        velocity = engine.get(obj, "velocity");
        size = engine.get(obj, "size");

        velocity.y = 0;

        if (position.y + size.height / 2 > ball.y) {
            velocity.y -= 200;
            if (position.y <= 0) {
                position.y = 0;
                velocity.y = 0;
            }
        }

        if (position.y + size.height / 2 < ball.y) {
            velocity.y += 200;
            if (position.y + size.height >= 600) {
                position.y = 600 - size.height;
                velocity.y = 0;
            }
        }
    }
};
