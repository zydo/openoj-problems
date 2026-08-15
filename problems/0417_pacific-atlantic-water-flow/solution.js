/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const m = heights.length;
    const n = heights[0].length;

    const reachable = (border) => {
        const seen = Array.from({ length: m }, () => new Array(n).fill(false));
        const stack = [];
        for (const [r, c] of border) {
            if (!seen[r][c]) {
                seen[r][c] = true;
            }
            stack.push([r, c]);
        }
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        while (stack.length > 0) {
            const [r, c] = stack.pop();
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (
                    nr >= 0 &&
                    nr < m &&
                    nc >= 0 &&
                    nc < n &&
                    !seen[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    seen[nr][nc] = true;
                    stack.push([nr, nc]);
                }
            }
        }
        return seen;
    };

    const pacificBorder = [];
    for (let c = 0; c < n; c++) pacificBorder.push([0, c]);
    for (let r = 0; r < m; r++) pacificBorder.push([r, 0]);
    const atlanticBorder = [];
    for (let c = 0; c < n; c++) atlanticBorder.push([m - 1, c]);
    for (let r = 0; r < m; r++) atlanticBorder.push([r, n - 1]);

    const pacific = reachable(pacificBorder);
    const atlantic = reachable(atlanticBorder);

    const result = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }
    return result;
};
