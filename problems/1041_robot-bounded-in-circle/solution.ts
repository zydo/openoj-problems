function isRobotBounded(instructions: string): boolean {
    let x = 0,
        y = 0;
    let dx = 0,
        dy = 1; // north
    for (const ch of instructions) {
        if (ch === "G") {
            x += dx;
            y += dy;
        } else if (ch === "L") {
            const ndx = -dy,
                ndy = dx;
            dx = ndx;
            dy = ndy;
        } else {
            // 'R'
            const ndx = dy,
                ndy = -dx;
            dx = ndx;
            dy = ndy;
        }
    }
    return (x === 0 && y === 0) || !(dx === 0 && dy === 1);
}
