module.exports = {
    "update": function (obj, dt) {
        var ball, position, size, velocity;

        ball = this.get("ball", "position");
        position = this.get(obj, "position");
        velocity = this.get(obj, "velocity");
        size = this.get(obj, "size");

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
