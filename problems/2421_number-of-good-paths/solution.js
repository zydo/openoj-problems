/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
    const n = vals.length;
    const parent = Array.from({ length: n }, (_, i) => i);
    const size = new Array(n).fill(1);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const union = (a, b) => {
        let ra = find(a);
        let rb = find(b);
        if (ra === rb) return;
        if (size[ra] < size[rb]) {
            const t = ra;
            ra = rb;
            rb = t;
        }
        parent[rb] = ra;
        size[ra] += size[rb];
    };

    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const byValue = new Map();
    for (let i = 0; i < n; i++) {
        if (!byValue.has(vals[i])) byValue.set(vals[i], []);
        byValue.get(vals[i]).push(i);
    }

    let answer = 0;
    const valueKeys = [...byValue.keys()].sort((a, b) => a - b);
    for (const v of valueKeys) {
        for (const u of byValue.get(v)) {
            for (const w of adj[u]) {
                if (vals[w] <= v) union(u, w);
            }
        }
        const componentCount = new Map();
        for (const u of byValue.get(v)) {
            const r = find(u);
            componentCount.set(r, (componentCount.get(r) || 0) + 1);
        }
        for (const c of componentCount.values()) {
            answer += (c * (c - 1)) / 2;
        }
    }
    return answer + n;
};
