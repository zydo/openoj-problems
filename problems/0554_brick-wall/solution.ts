function leastBricks(wall: number[][]): number {
    const edgeCounts = new Map<number, number>();
    for (const row of wall) {
        let position = 0;
        for (let i = 0; i < row.length - 1; i++) {
            position += row[i];
            edgeCounts.set(position, (edgeCounts.get(position) || 0) + 1);
        }
    }
    let bestEdges = 0;
    for (const count of edgeCounts.values()) {
        if (count > bestEdges) {
            bestEdges = count;
        }
    }
    return wall.length - bestEdges;
}
