/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    if (edges.length !== n - 1) {
        return false;
    }
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    for (const [a, b] of edges) {
        const ra = find(a);
        const rb = find(b);
        if (ra === rb) {
            return false;
        }
        parent[ra] = rb;
    }
    return true;
};
