function matrixMedian(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const need = Math.floor((m * n) / 2) + 1;
    let lo = Infinity,
        hi = -Infinity;
    for (const row of grid) {
        lo = Math.min(lo, row[0]);
        hi = Math.max(hi, row[n - 1]);
    }

    function countLe(x: number): number {
        let total = 0;
        for (const row of grid) {
            let a = 0,
                b = row.length;
            while (a < b) {
                const mid = (a + b) >> 1;
                if (row[mid] <= x) a = mid + 1;
                else b = mid;
            }
            total += a;
        }
        return total;
    }

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countLe(mid) >= need) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
