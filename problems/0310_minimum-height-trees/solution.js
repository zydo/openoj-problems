/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n <= 2) {
        const r = [];
        for (let i = 0; i < n; i++) r.push(i);
        return r;
    }
    const adjacency = Array.from({ length: n }, () => []);
    const degree = new Array(n).fill(0);
    for (const [a, b] of edges) {
        adjacency[a].push(b);
        adjacency[b].push(a);
        degree[a]++;
        degree[b]++;
    }
    let leaves = [];
    for (let i = 0; i < n; i++) if (degree[i] === 1) leaves.push(i);
    let remaining = n;
    while (remaining > 2) {
        const nextLeaves = [];
        for (const leaf of leaves) {
            remaining--;
            for (const neighbor of adjacency[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) nextLeaves.push(neighbor);
            }
        }
        leaves = nextLeaves;
    }
    return leaves.slice().sort((a, b) => a - b);
};
