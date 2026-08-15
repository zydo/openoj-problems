function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length,
        n = isWater[0].length;
    const height: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(-1),
    );
    const q: [number, number][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    let head = 0;
    while (head < q.length) {
        const [i, j] = q[head++];
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
                height[ni][nj] === -1
            ) {
                height[ni][nj] = height[i][j] + 1;
                q.push([ni, nj]);
            }
        }
    }
    return height;
}
