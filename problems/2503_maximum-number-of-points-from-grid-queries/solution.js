/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
    const m = grid.length,
        n = grid[0].length;
    const qlen = queries.length;
    const order = Array.from({ length: qlen }, (_, i) => i);
    order.sort((a, b) => queries[a] - queries[b]);
    const answer = new Array(qlen).fill(0);
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    visited[0][0] = true;

    // Min-heap of [val, r, c] (lexicographic order; ties impossible since
    // each cell is pushed at most once).
    const heap = [[grid[0][0], 0, 0]];
    const less = (x, y) =>
        x[0] !== y[0] ? x[0] < y[0] : x[1] !== y[1] ? x[1] < y[1] : x[2] < y[2];
    const push = (v) => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (less(heap[i], heap[p])) {
                const t = heap[i];
                heap[i] = heap[p];
                heap[p] = t;
                i = p;
            } else break;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                let s = i;
                if (l < heap.length && less(heap[l], heap[s])) s = l;
                if (r < heap.length && less(heap[r], heap[s])) s = r;
                if (s === i) break;
                const t = heap[i];
                heap[i] = heap[s];
                heap[s] = t;
                i = s;
            }
        }
        return top;
    };

    let count = 0;
    for (const idx of order) {
        const q = queries[idx];
        while (heap.length > 0 && heap[0][0] < q) {
            const [_, r, c] = pop();
            count += 1;
            const nb = [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1],
            ];
            for (const [nr, nc] of nb) {
                if (
                    0 <= nr &&
                    nr < m &&
                    0 <= nc &&
                    nc < n &&
                    !visited[nr][nc]
                ) {
                    visited[nr][nc] = true;
                    push([grid[nr][nc], nr, nc]);
                }
            }
        }
        answer[idx] = count;
    }
    return answer;
};
