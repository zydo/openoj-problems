/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    const n = grid.length;
    const dist = Array.from({ length: n }, () => new Array(n).fill(-1));
    let q = [];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                q.push([r, c]);
            }
        }
    }
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    for (let head = 0; head < q.length; head++) {
        const [r, c] = q[head];
        for (const [dr, dc] of dirs) {
            const nr = r + dr,
                nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }

    function reachable(threshold) {
        if (dist[0][0] < threshold || dist[n - 1][n - 1] < threshold) {
            return false;
        }
        const seen = Array.from({ length: n }, () => new Array(n).fill(false));
        seen[0][0] = true;
        const dq = [[0, 0]];
        for (let head = 0; head < dq.length; head++) {
            const [r, c] = dq[head];
            if (r === n - 1 && c === n - 1) {
                return true;
            }
            for (const [dr, dc] of dirs) {
                const nr = r + dr,
                    nc = c + dc;
                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < n &&
                    !seen[nr][nc] &&
                    dist[nr][nc] >= threshold
                ) {
                    seen[nr][nc] = true;
                    dq.push([nr, nc]);
                }
            }
        }
        return false;
    }

    let lo = 0,
        hi = 2 * n,
        ans = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (reachable(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
};
