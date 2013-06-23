var keyboard, position, size;

module.exports = {
    "update": function (engine, obj, dt) {
        keyboard = engine.get(obj, "keyboard");
        position = engine.get(obj, "position");
        size = engine.get(obj, "size");

        if (keyboard.up === true) {
            position.y -= 3;
            if (position.y < 0) {
                position.y = 0;
            }
        }

        if (keyboard.down === true) {
            position.y += 3;
            if (position.y + size.height > 600) {
                position.y = 600 - size.height;
            }
        }
    }
};
