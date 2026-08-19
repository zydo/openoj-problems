/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumRoutePeak = function (heights) {
    const n = heights.length;
    const INF = Infinity;
    // A path's cost is the max elevation along it, and max is
    // monotone, so Dijkstra's greedy argument holds with max
    // relaxation. dist holds the smallest peak each cell is
    // route peak — the start contributes heights[0][0] itself.
    const dist = Array.from({ length: n }, () => new Array(n).fill(INF));
    dist[0][0] = heights[0][0];
    // Array kept sorted descending so pop() yields the min-peak entry.
    const heap = [[heights[0][0], 0, 0]];
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (heap.length > 0) {
        const [t, r, c] = heap.pop();
        // First pop of the target is optimal: cells settle in order
        // of their true minimum peak.
        if (r === n - 1 && c === n - 1) return t;
        // Skip stale entries superseded by a smaller settled peak.
        if (t > dist[r][c]) continue;
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                // Extending a path can only keep or raise its peak.
                const nt = Math.max(t, heights[nr][nc]);
                if (nt < dist[nr][nc]) {
                    dist[nr][nc] = nt;
                    heap.push([nt, nr, nc]);
                }
            }
        }
        heap.sort((a, b) => b[0] - a[0]);
    }
    return dist[n - 1][n - 1];
};
