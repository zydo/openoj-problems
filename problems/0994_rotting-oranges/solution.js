/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const g = grid.map((row) => row.slice());
    const rows = g.length;
    const cols = g[0].length;
    const queue = [];
    let fresh = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (g[r][c] === 2) {
                queue.push([r, c, 0]);
            } else if (g[r][c] === 1) {
                fresh++;
            }
        }
    }
    let minutes = 0;
    let head = 0;
    while (head < queue.length) {
        const [r, c, t] = queue[head++];
        if (t > minutes) {
            minutes = t;
        }
        for (const [dr, dc] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const nr = r + dr;
            const nc = c + dc;
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                g[nr][nc] === 1
            ) {
                g[nr][nc] = 2;
                fresh--;
                queue.push([nr, nc, t + 1]);
            }
        }
    }
    return fresh === 0 ? minutes : -1;
};
