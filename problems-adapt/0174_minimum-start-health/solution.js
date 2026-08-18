/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumStartHealth = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const INF = Infinity;
    // need[i][j]: smallest health needed when ENTERING (i, j) so some
    // right/down path reaches the far corner. An INF border keeps
    // out-of-bounds neighbors from ever being chosen.
    const need = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(INF));
    // Seed: leaving the bottom-right room requires at least 1 health.
    need[m][n - 1] = 1;
    // Fill bottom-to-top, right-to-left so both onward values are final.
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // Take the cheaper onward room, pay this room's effect.
            const bestNext = Math.min(need[i + 1][j], need[i][j + 1]);
            // Health must stay at least 1 — 0 or below is fatal.
            need[i][j] = Math.max(1, bestNext - grid[i][j]);
        }
    }
    return need[0][0];
};
