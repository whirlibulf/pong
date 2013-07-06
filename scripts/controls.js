module.exports = {
    "update": function (obj, dt) {
        var keyboard, position, size, velocity;

        keyboard = this.get(obj, "keyboard");
        position = this.get(obj, "position");
        velocity = this.get(obj, "velocity");
        size = this.get(obj, "size");

        velocity.y = 0;

        if (keyboard.up === true) {
            velocity.y -= 200;
            if (position.y <= 0) {
                position.y = 0;
                velocity.y = 0;
            }
        }

        if (keyboard.down === true) {
            velocity.y += 200;
            if (position.y + size.height >= 600) {
                position.y = 600 - size.height;
                velocity.y = 0;
            }
        }
    }
};
