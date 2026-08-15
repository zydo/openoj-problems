/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const conns = connections.slice().sort((a, b) => a[2] - b[2]);
    let total = 0;
    let components = n;
    for (const [x, y, cost] of conns) {
        const rx = find(x);
        const ry = find(y);
        if (rx !== ry) {
            parent[rx] = ry;
            total += cost;
            components -= 1;
            if (components === 1) return total;
        }
    }
    return -1;
};
