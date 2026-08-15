/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
    const adj = new Map();
    const indeg = new Map();
    const outdeg = new Map();
    for (const [u, v] of pairs) {
        if (!adj.has(u)) {
            adj.set(u, []);
        }
        adj.get(u).push(v);
        outdeg.set(u, (outdeg.get(u) || 0) + 1);
        indeg.set(v, (indeg.get(v) || 0) + 1);
    }

    let start = pairs[0][0];
    for (const u of outdeg.keys()) {
        if ((outdeg.get(u) || 0) - (indeg.get(u) || 0) === 1) {
            start = u;
            break;
        }
    }

    const stack = [start];
    const path = [];
    while (stack.length > 0) {
        const u = stack[stack.length - 1];
        const edges = adj.get(u);
        if (edges && edges.length > 0) {
            stack.push(edges.pop());
        } else {
            path.push(u);
            stack.pop();
        }
    }
    path.reverse();

    const res = [];
    for (let i = 0; i + 1 < path.length; i++) {
        res.push([path[i], path[i + 1]]);
    }
    return res;
};
