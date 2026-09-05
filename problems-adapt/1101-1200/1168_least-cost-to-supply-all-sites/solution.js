/**
 * @param {number} n
 * @param {number[]} sources
 * @param {number[][]} links
 * @return {number}
 */
var leastCostToSupplyAll = function (n, sources, links) {
    // Kruskal over sites 1..n plus a virtual node 0 (source edges).
    const edges = [];
    for (let i = 0; i < n; i++) {
        edges.push([sources[i], 0, i + 1]);
    }
    for (const [house1, house2, cost] of links) {
        edges.push([cost, house1, house2]);
    }
    edges.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    let total = 0;
    let used = 0;
    for (const [cost, a, b] of edges) {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            total += cost;
            used += 1;
            if (used === n) {
                break;
            }
        }
    }
    return total;
};
