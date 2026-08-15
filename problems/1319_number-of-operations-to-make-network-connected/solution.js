/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) {
        return -1;
    }
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let components = n;
    for (const [a, b] of connections) {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            components--;
        }
    }
    return components - 1;
};
