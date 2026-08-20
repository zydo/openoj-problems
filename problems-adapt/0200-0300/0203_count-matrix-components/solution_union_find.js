/**
 * @param {number[][]} adjacency
 * @return {number}
 */
var countComponents = function (adjacency) {
    const n = adjacency.length;
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;
    // Path-halving: splice every other node directly under its
    // grandparent, flattening the tree while walking to the root.
    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    // Every city begins as its own component; only a
    // successful union ever reduces the count.
    let components = n;
    // The matrix is symmetric, so scanning pairs i < j feeds every
    // road to the union exactly once; the diagonal is skipped.
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (adjacency[i][j] === 1) {
                const ri = find(i),
                    rj = find(j);
                // A road joining two distinct roots merges two components;
                // one whose cities already share a root is redundant.
                if (ri !== rj) {
                    parent[ri] = rj;
                    components--;
                }
            }
        }
    }
    return components;
};
