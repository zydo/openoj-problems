/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const NEG = -Infinity;
    let dp = Array.from({ length: cols }, () => new Array(cols).fill(NEG));
    dp[0][cols - 1] = grid[0][0] + (cols > 1 ? grid[0][cols - 1] : 0);
    for (let r = 1; r < rows; r++) {
        const ndp = Array.from({ length: cols }, () =>
            new Array(cols).fill(NEG),
        );
        for (let c1 = 0; c1 < cols; c1++) {
            for (let c2 = 0; c2 < cols; c2++) {
                let best = NEG;
                for (let d1 = -1; d1 <= 1; d1++) {
                    for (let d2 = -1; d2 <= 1; d2++) {
                        const p1 = c1 + d1;
                        const p2 = c2 + d2;
                        if (
                            p1 >= 0 &&
                            p1 < cols &&
                            p2 >= 0 &&
                            p2 < cols &&
                            dp[p1][p2] > best
                        ) {
                            best = dp[p1][p2];
                        }
                    }
                }
                if (best > NEG) {
                    ndp[c1][c2] =
                        best + grid[r][c1] + (c1 !== c2 ? grid[r][c2] : 0);
                }
            }
        }
        dp = ndp;
    }
    let ans = NEG;
    for (let c1 = 0; c1 < cols; c1++) {
        for (let c2 = 0; c2 < cols; c2++) {
            if (dp[c1][c2] > ans) {
                ans = dp[c1][c2];
            }
        }
    }
    return ans;
};
