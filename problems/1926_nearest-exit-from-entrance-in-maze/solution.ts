function nearestExit(maze: string[][], entrance: number[]): number {
    const m = maze.length,
        n = maze[0].length;
    const er = entrance[0],
        ec = entrance[1];
    const dist: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(-1),
    );
    dist[er][ec] = 0;
    const q: [number, number][] = [[er, ec]];
    let head = 0;
    while (head < q.length) {
        const [i, j] = q[head++];
        if (
            (i === 0 || i === m - 1 || j === 0 || j === n - 1) &&
            !(i === er && j === ec)
        ) {
            return dist[i][j];
        }
        for (const [di, dj] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ] as const) {
            const ni = i + di,
                nj = j + dj;
            if (
                ni >= 0 &&
                ni < m &&
                nj >= 0 &&
                nj < n &&
                maze[ni][nj] === "." &&
                dist[ni][nj] === -1
            ) {
                dist[ni][nj] = dist[i][j] + 1;
                q.push([ni, nj]);
            }
        }
    }
    return -1;
}
