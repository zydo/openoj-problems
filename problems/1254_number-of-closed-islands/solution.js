/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    const rows = grid.length,
        cols = grid[0].length;
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const flood = (r, c) => {
        grid[r][c] = 1;
        const stack = [[r, c]];
        let closed = true;
        while (stack.length > 0) {
            const [x, y] = stack.pop();
            for (const [dx, dy] of dirs) {
                const nx = x + dx,
                    ny = y + dy;
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                    if (grid[nx][ny] === 0) {
                        grid[nx][ny] = 1;
                        stack.push([nx, ny]);
                    }
                } else {
                    closed = false;
                }
            }
        }
        return closed;
    };

    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                if (flood(r, c)) count++;
            }
        }
    }
    return count;
};
