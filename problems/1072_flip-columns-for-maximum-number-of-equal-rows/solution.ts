function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const counts = new Map<string, number>();
    let best = 0;
    for (const row of matrix) {
        const key = row.map((value) => value ^ row[0]).join(",");
        const next = (counts.get(key) || 0) + 1;
        counts.set(key, next);
        best = Math.max(best, next);
    }
    return best;
}
