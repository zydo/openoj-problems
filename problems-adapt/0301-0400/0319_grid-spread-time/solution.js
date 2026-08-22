/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridSpreadTime = function (grid) {
    const g = grid.map((row) => row.slice());
    const rows = g.length;
    const cols = g[0].length;
    const queue = [];
    let pending = 0;
    // Multi-source BFS: every active cell starts at t = 0; the answer
    // is the time the last pending cell activates. Count pending cells so
    // walled-off stragglers can be detected at the end.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (g[r][c] === 2) {
                queue.push([r, c, 0]);
            } else if (g[r][c] === 1) {
                pending++;
            }
        }
    }
    let rounds = 0;
    let head = 0;
    while (head < queue.length) {
        const [r, c, t] = queue[head++];
        // Tracking the max activation time spares per-round batching.
        if (t > rounds) {
            rounds = t;
        }
        for (const [dr, dc] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && g[nr][nc] === 1) {
                // Flip to active on enqueue: each cell queues at most
                // once and `pending` stays in sync with the grid.
                g[nr][nc] = 2;
                pending--;
                queue.push([nr, nc, t + 1]);
            }
        }
    }
    return pending === 0 ? rounds : -1;
};
