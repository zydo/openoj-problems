/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var drainsToBothSeas = function (heights) {
    const m = heights.length;
    const n = heights[0].length;

    // Reverse the flow: walk inland from the ocean border instead of
    // downhill from every cell, so one traversal finds all draining cells.
    const reachable = (border) => {
        const seen = Array.from({ length: m }, () => new Array(n).fill(false));
        const queue = [];
        for (const [r, c] of border) {
            if (!seen[r][c]) {
                seen[r][c] = true;
            }
            queue.push([r, c]);
        }
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (let head = 0; head < queue.length; head++) {
            const [r, c] = queue[head];
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                // Only a neighbor at least as tall could have flowed down
                // into (r, c).
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !seen[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                    // Mark on enqueue so each cell enters the queue at most once.
                    seen[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        return seen;
    };

    // Upper sea seeds: top row + left column; lower sea: bottom row + right
    // column. Corners appear in both seed lists.
    const upperBorder = [];
    for (let c = 0; c < n; c++) upperBorder.push([0, c]);
    for (let r = 0; r < m; r++) upperBorder.push([r, 0]);
    const lowerBorder = [];
    for (let c = 0; c < n; c++) lowerBorder.push([m - 1, c]);
    for (let r = 0; r < m; r++) lowerBorder.push([r, n - 1]);

    const upperSea = reachable(upperBorder);
    const lowerSea = reachable(lowerBorder);

    // Row-major intersection of the two reachable sets comes out sorted.
    const result = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (upperSea[r][c] && lowerSea[r][c]) {
                result.push([r, c]);
            }
        }
    }
    return result;
};
