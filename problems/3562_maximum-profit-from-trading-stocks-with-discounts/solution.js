/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
    const children = Array.from({ length: n }, () => []);
    for (const [u, v] of hierarchy) {
        children[u - 1].push(v - 1);
    }

    const combine = (kids, tables) => {
        const cur = new Int32Array(budget + 1);
        for (const child of kids) {
            const arr = tables[child];
            const nxt = Int32Array.from(cur);
            for (let b = 0; b <= budget; b++) {
                const cb = cur[b];
                for (let t = 0; t + b <= budget; t++) {
                    const val = cb + arr[t];
                    if (val > nxt[b + t]) nxt[b + t] = val;
                }
            }
            cur.set(nxt);
            for (let b = 1; b <= budget; b++) {
                if (cur[b] < cur[b - 1]) cur[b] = cur[b - 1];
            }
        }
        return cur;
    };

    const order = [0];
    for (let i = 0; i < order.length; i++) {
        for (const v of children[order[i]]) order.push(v);
    }

    const f = new Array(n);
    const g = new Array(n);
    for (let idx = n - 1; idx >= 0; idx--) {
        const u = order[idx];
        const childF = combine(children[u], f);
        const childG = combine(children[u], g);

        const fu = Int32Array.from(childF);
        const gu = Int32Array.from(childF);
        const costFull = present[u];
        const costDisc = Math.floor(present[u] / 2);
        const profitFull = future[u] - costFull;
        const profitDisc = future[u] - costDisc;
        for (let b = 0; b <= budget; b++) {
            if (b >= costFull) {
                const val = childG[b - costFull] + profitFull;
                if (val > fu[b]) fu[b] = val;
            }
            if (b >= costDisc) {
                const val = childG[b - costDisc] + profitDisc;
                if (val > gu[b]) gu[b] = val;
            }
        }
        for (let b = 1; b <= budget; b++) {
            if (fu[b] < fu[b - 1]) fu[b] = fu[b - 1];
            if (gu[b] < gu[b - 1]) gu[b] = gu[b - 1];
        }
        f[u] = fu;
        g[u] = gu;
    }
    return f[0][budget];
};
