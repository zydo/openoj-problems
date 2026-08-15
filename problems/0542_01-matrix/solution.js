/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length,
        n = mat[0].length;
    const dist = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push(i * n + j);
            }
        }
    }
    let head = 0;
    while (head < queue.length) {
        const cell = queue[head++];
        const i = Math.floor(cell / n),
            j = cell % n;
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (const [di, dj] of dirs) {
            const ni = i + di,
                nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && dist[ni][nj] === -1) {
                dist[ni][nj] = dist[i][j] + 1;
                queue.push(ni * n + nj);
            }
        }
    }
    return dist;
};
