function findTheCity(
    n: number,
    edges: number[][],
    distanceThreshold: number,
): number {
    const INF = Infinity;
    const dist: number[][] = Array.from({ length: n }, () =>
        new Array(n).fill(INF),
    );
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    for (const [a, b, w] of edges) {
        dist[a][b] = w;
        dist[b][a] = w;
    }
    for (let k = 0; k < n; k++) {
        const dk = dist[k];
        for (let i = 0; i < n; i++) {
            const dik = dist[i][k];
            if (dik === INF) {
                continue;
            }
            const di = dist[i];
            for (let j = 0; j < n; j++) {
                if (dk[j] === INF) {
                    continue;
                }
                const candidate = dik + dk[j];
                if (candidate < di[j]) {
                    di[j] = candidate;
                }
            }
        }
    }
    let bestCity = -1;
    let bestCount = INF;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (j !== i && dist[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count < bestCount || (count === bestCount && i > bestCity)) {
            bestCity = i;
            bestCount = count;
        }
    }
    return bestCity;
}
