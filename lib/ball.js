module.exports = {
    "update": function (engine, obj, dt) {
        var position, size, velocity;

        position = engine.get(obj, "position");
        velocity = engine.get(obj, "velocity");
        size = engine.get(obj, "size");

        if (position.x - size.radius < 0) {
            position.x = 400;
            position.y = 300;
        }

        if (position.x + size.radius > 800) {
            position.x = 400;
            position.y = 300;
        }

        if (position.y - size.radius < 0) {
            velocity.y = 200;
        }

        if (position.y + size.radius > 600) {
            velocity.y = -200;
        }
    }
};
