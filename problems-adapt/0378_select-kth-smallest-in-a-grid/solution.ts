function selectKthSmallest(grid: number[][], k: number): number {
    const n = grid.length;
    const countLe = (x: number): number => {
        // Staircase walk from bottom-left: elements <= x.
        let count = 0;
        let row = n - 1,
            col = 0;
        while (row >= 0 && col < n) {
            if (grid[row][col] <= x) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }
        return count;
    };
    let lo = grid[0][0],
        hi = grid[n - 1][n - 1];
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (countLe(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
