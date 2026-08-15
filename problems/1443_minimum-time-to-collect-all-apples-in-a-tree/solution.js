/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
    const adjacency = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adjacency[a].push(b);
        adjacency[b].push(a);
    }

    const parent = new Array(n).fill(-1);
    const order = [];
    const seen = new Array(n).fill(false);
    seen[0] = true;
    const stack = [0];
    while (stack.length > 0) {
        const u = stack.pop();
        order.push(u);
        for (const v of adjacency[u]) {
            if (!seen[v]) {
                seen[v] = true;
                parent[v] = u;
                stack.push(v);
            }
        }
    }

    const has = hasApple.map(Boolean);
    let time = 0;
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        if (u === 0) {
            continue;
        }
        if (has[u]) {
            time += 2;
            has[parent[u]] = true;
        }
    }
    return time;
};
