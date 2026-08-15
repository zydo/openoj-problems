function maxDistance(grid: number[][]): number {
    const n = grid.length;
    const g: number[][] = grid.map((row) => row.slice());
    const queue: number[][] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === 1) queue.push([i, j]);
        }
    }
    if (queue.length === 0 || queue.length === n * n) return -1;
    let dist = 0;
    let head = 0;
    while (head < queue.length) {
        dist += 1;
        const size = queue.length;
        for (let s = head; s < size; s++) {
            const [i, j] = queue[s];
            for (const [ni, nj] of [
                [i + 1, j],
                [i - 1, j],
                [i, j + 1],
                [i, j - 1],
            ]) {
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && g[ni][nj] === 0) {
                    g[ni][nj] = 1;
                    queue.push([ni, nj]);
                }
            }
        }
        head = size;
    }
    return dist - 1;
}
