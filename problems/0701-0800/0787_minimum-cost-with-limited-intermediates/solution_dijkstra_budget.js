/**
 * @param {number} nodeCount
 * @param {number[][]} links
 * @param {number} source
 * @param {number} target
 * @param {number} maxIntermediates
 * @return {number}
 */
var minimumLimitedRouteCost = function (nodeCount, links, source, target, maxIntermediates) {
    const graph = Array.from({ length: nodeCount }, () => []);
    for (const [f, t, weight] of links) {
        graph[f].push([t, weight]);
    }

    // Min-heap of [cost, node, links taken]
    const heap = [];
    const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p][0] <= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1;
                const r = l + 1;
                let m = i;
                if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
                if (m === i) break;
                [heap[m], heap[i]] = [heap[i], heap[m]];
                i = m;
            }
        }
        return top;
    };

    // State = (cost, node, links taken). Carrying the count in the state
    // is what enforces the limit: a state that already used its maxIntermediates+1 links
    // is never allowed to board another.
    push([0, source, 0]);
    const best = new Array(nodeCount).fill(Infinity);
    while (heap.length > 0) {
        const [cost, node, edges] = pop();
        // The heap pops in cost order, so the first target pop is final.
        if (node === target) {
            return cost;
        }
        // Dominance prune: a cheaper state that used no more links was
        // already expanded here, so this one cannot lead anywhere new.
        if (edges > best[node]) {
            continue;
        }
        best[node] = edges;
        if (edges < maxIntermediates + 1) {
            for (const [nxt, weight] of graph[node]) {
                push([cost + weight, nxt, edges + 1]);
            }
        }
    }
    return -1;
};
