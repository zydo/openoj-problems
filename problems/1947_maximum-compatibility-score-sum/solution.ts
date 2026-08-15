function maxCompatibilitySum(
    students: number[][],
    mentors: number[][],
): number {
    const m = students.length;
    const score: number[][] = [];
    for (let i = 0; i < m; i++) {
        score.push([]);
        for (let j = 0; j < m; j++) {
            let s = 0;
            for (let t = 0; t < students[i].length; t++) {
                if (students[i][t] === mentors[j][t]) s++;
            }
            score[i].push(s);
        }
    }
    const full = 1 << m;
    const dp = new Array(full).fill(0);
    for (let mask = 1; mask < full; mask++) {
        let i = -1;
        for (let b = 0; b < m; b++) if ((mask >> b) & 1) i++;
        let best = 0;
        for (let j = 0; j < m; j++) {
            if ((mask >> j) & 1) {
                const v = dp[mask ^ (1 << j)] + score[i][j];
                if (v > best) best = v;
            }
        }
        dp[mask] = best;
    }
    return dp[full - 1];
}
