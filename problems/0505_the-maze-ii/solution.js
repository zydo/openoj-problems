/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
    const m = maze.length,
        n = maze[0].length;
    const dist = Array.from({ length: m }, () => Array(n).fill(-1));
    // min-heap of [d, r, c]
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
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1,
                    r = l + 1;
                let s = i;
                if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
                if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
                if (s === i) break;
                [heap[s], heap[i]] = [heap[i], heap[s]];
                i = s;
            }
        }
        return top;
    };
    dist[start[0]][start[1]] = 0;
    push([0, start[0], start[1]]);
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (heap.length) {
        const [d, r, c] = pop();
        if (r === destination[0] && c === destination[1]) return d;
        if (d > dist[r][c]) continue;
        for (const [dr, dc] of dirs) {
            let nr = r,
                nc = c,
                steps = 0;
            while (
                nr + dr >= 0 &&
                nr + dr < m &&
                nc + dc >= 0 &&
                nc + dc < n &&
                maze[nr + dr][nc + dc] === 0
            ) {
                nr += dr;
                nc += dc;
                steps++;
            }
            if (steps > 0) {
                const nd = d + steps;
                if (dist[nr][nc] === -1 || nd < dist[nr][nc]) {
                    dist[nr][nc] = nd;
                    push([nd, nr, nc]);
                }
            }
        }
    }
    return -1;
};
