/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minTime = function (n, edges, k) {
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    function find(x) {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    function union(a, b) {
        const ra = find(a),
            rb = find(b);
        if (ra === rb) return false;
        parent[ra] = rb;
        return true;
    }

    const ordered = edges.slice().sort((e1, e2) => e2[2] - e1[2]);
    let components = n;
    let answer = 0;
    let i = 0;
    const m = ordered.length;
    while (i < m) {
        const t = ordered[i][2];
        if (components >= k) answer = t;
        while (i < m && ordered[i][2] === t) {
            const u = ordered[i][0],
                v = ordered[i][1];
            if (union(u, v)) components--;
            i++;
        }
    }
    if (components >= k) answer = 0;
    return answer;
};
