function findMinArrowShots(points: number[][]): number {
    const ordered = [...points].sort((a, b) => a[1] - b[1]);
    let arrows = 0;
    let lastArrow = -Infinity;
    for (const [start, end] of ordered) {
        if (start > lastArrow) {
            arrows++;
            lastArrow = end;
        }
    }
    return arrows;
}
