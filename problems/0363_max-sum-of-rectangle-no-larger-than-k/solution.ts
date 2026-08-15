function maxSumSubmatrix(matrix: number[][], k: number): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let best: number | null = null;
    for (let top = 0; top < m; top++) {
        const colSum: number[] = new Array(n).fill(0);
        for (let bottom = top; bottom < m; bottom++) {
            for (let c = 0; c < n; c++) {
                colSum[c] += matrix[bottom][c];
            }
            let prefix = 0;
            const prefixes: number[] = [0];
            for (let i = 0; i < n; i++) {
                prefix += colSum[i];
                // bisect_left for prefix - k
                let lo = 0,
                    hi = prefixes.length;
                while (lo < hi) {
                    const mid = (lo + hi) >> 1;
                    if (prefixes[mid] < prefix - k) lo = mid + 1;
                    else hi = mid;
                }
                if (lo < prefixes.length) {
                    const candidate = prefix - prefixes[lo];
                    if (best === null || candidate > best) best = candidate;
                }
                // insort(prefixes, prefix)
                let pos = prefixes.length;
                for (let t = 0; t < prefixes.length; t++) {
                    if (prefixes[t] >= prefix) {
                        pos = t;
                        break;
                    }
                }
                prefixes.splice(pos, 0, prefix);
            }
        }
    }
    return best as number;
}
