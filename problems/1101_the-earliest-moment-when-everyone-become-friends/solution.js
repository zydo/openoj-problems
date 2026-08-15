/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
    const parent = new Array(n).fill(0).map((_, i) => i);
    const find = (a) => {
        while (parent[a] !== a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    };
    const sorted = logs.slice().sort((a, b) => a[0] - b[0]);
    let components = n;
    for (const [timestamp, x, y] of sorted) {
        const rx = find(x),
            ry = find(y);
        if (rx !== ry) {
            parent[rx] = ry;
            components--;
            if (components === 1) {
                return timestamp;
            }
        }
    }
    return -1;
};
