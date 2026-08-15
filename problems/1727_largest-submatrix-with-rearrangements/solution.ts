function largestSubmatrix(matrix: number[][]): number {
    const m = matrix.length;
    if (m === 0) return 0;
    const n = matrix[0].length;
    const heights: number[] = new Array(n).fill(0);
    let best = 0;
    for (const row of matrix) {
        for (let j = 0; j < n; j++) {
            heights[j] = row[j] === 1 ? heights[j] + 1 : 0;
        }
        const ordered = heights.slice().sort((a, b) => b - a);
        for (let i = 0; i < ordered.length; i++) {
            const h = ordered[i];
            if (h === 0) break;
            const area = h * (i + 1);
            if (area > best) best = area;
        }
    }
    return best;
}
