function collisionSurvivors(movers: number[]): number[] {
    // The stack holds survivors — internally stable, all collisions resolved.
    const stack: number[] = [];
    for (const mover of movers) {
        let alive = true;
        // A newcomer can only fight the top, and only when it moves left
        // against a right-moving survivor; other pairs never meet.
        while (alive && stack.length > 0 && mover < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            if (top < -mover) {
                // Top explodes; the newcomer continues against the new top.
                stack.pop();
            } else if (top === -mover) {
                // Equal sizes: both explode.
                stack.pop();
                alive = false;
            } else {
                // Top is larger: the newcomer explodes.
                alive = false;
            }
        }
        if (alive) {
            stack.push(mover);
        }
    }
    return stack;
}
