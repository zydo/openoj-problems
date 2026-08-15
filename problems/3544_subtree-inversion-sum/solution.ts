function subtreeInversionSum(
    edges: number[][],
    nums: number[],
    k: number,
): number {
    const n = nums.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const parent: number[] = new Array(n).fill(-1);
    parent[0] = -2;
    const order: number[] = [0];
    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        for (const v of adj[u]) {
            if (v !== parent[u]) {
                parent[v] = u;
                order.push(v);
            }
        }
    }

    const width = k + 1;
    const dp: Float64Array[][] = new Array(n);
    for (let idx = n - 1; idx >= 0; idx--) {
        const u = order[idx];
        const childSum: Float64Array[] = [
            new Float64Array(width),
            new Float64Array(width),
        ];
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            const cv = dp[v];
            for (let flip = 0; flip < 2; flip++) {
                const row = childSum[flip];
                const crow = cv[flip];
                for (let d = 0; d < width; d++) row[d] += crow[d];
            }
        }

        const table: Float64Array[] = [
            new Float64Array(width),
            new Float64Array(width),
        ];
        for (let flip = 0; flip < 2; flip++) {
            const s = flip === 0 ? 1 : -1;
            const baseDont = nums[u] * s;
            const baseInv = -nums[u] * s;
            const dontRow = childSum[flip];
            const invRow = childSum[flip ^ 1];
            for (let dist = 0; dist < width; dist++) {
                const dd = dist < k ? dist + 1 : k;
                const valDont = baseDont + dontRow[dd];
                if (dist >= k) {
                    const valInv = baseInv + invRow[1];
                    table[flip][dist] = valDont > valInv ? valDont : valInv;
                } else {
                    table[flip][dist] = valDont;
                }
            }
        }
        dp[u] = table;
    }
    return dp[0][0][k];
}
