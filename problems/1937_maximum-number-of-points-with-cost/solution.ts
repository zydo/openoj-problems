function maxPoints(points: number[][]): number {
    const m = points.length;
    const n = points[0].length;
    let prev: number[] = new Array(n);
    for (let c = 0; c < n; c++) prev[c] = points[0][c];
    const left = new Array(n);
    const right = new Array(n);
    for (let r = 1; r < m; r++) {
        let best = prev[0] + 0;
        for (let c = 0; c < n; c++) {
            if (prev[c] + c > best) best = prev[c] + c;
            left[c] = best;
        }
        best = prev[n - 1] - (n - 1);
        for (let c = n - 1; c >= 0; c--) {
            if (prev[c] - c > best) best = prev[c] - c;
            right[c] = best;
        }
        const cur = new Array(n);
        for (let c = 0; c < n; c++) {
            cur[c] = points[r][c] + Math.max(left[c] - c, right[c] + c);
        }
        prev = cur;
    }
    let ans = prev[0];
    for (let c = 1; c < n; c++) {
        if (prev[c] > ans) ans = prev[c];
    }
    return ans;
}
