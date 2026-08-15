/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const INF = Infinity;
    const dist = Array.from({ length: m }, () => new Array(n).fill(INF));
    dist[0][0] = 0;
    // Deque via two stacks (amortized O(1) push/pop on both ends).
    let left = [];
    let right = [];
    const pushLeft = (x) => left.push(x);
    const pushRight = (x) => right.push(x);
    const popLeft = () => {
        if (left.length === 0) {
            left = right.reverse();
            right = [];
        }
        return left.pop();
    };
    pushRight([0, 0]);
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    while (left.length || right.length) {
        const [i, j] = popLeft();
        const d = dist[i][j];
        for (const [di, dj] of dirs) {
            const ni = i + di,
                nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                const nd = d + grid[ni][nj];
                if (nd < dist[ni][nj]) {
                    dist[ni][nj] = nd;
                    if (grid[ni][nj] === 0) pushLeft([ni, nj]);
                    else pushRight([ni, nj]);
                }
            }
        }
    }
    return dist[m - 1][n - 1];
};
