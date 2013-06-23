var position, size, velocity;

module.exports = {
    "update": function (engine, obj, dt) {
        position = engine.get(obj, "position");
        velocity = engine.get(obj, "velocity");
        size = engine.get(obj, "size");

        if (position.x - size.radius < 0) {
            velocity.x = 100;
        }

        if (position.x + size.radius > 800) {
            velocity.x = -100;
        }

        if (position.y - size.radius < 0) {
            velocity.y = 100;
        }

        if (position.y + size.radius > 600) {
            velocity.y = -100;
        }
    }
};
