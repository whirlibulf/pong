module.exports = {
    "update": function (obj, dt) {
        var position, size, velocity;

        position = this.get(obj, "position");
        velocity = this.get(obj, "velocity");
        size = this.get(obj, "size");

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
