/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let count = n;
    for (const [a, b] of edges) {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            count--;
        }
    }
    return count;
};
