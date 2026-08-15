/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
    const adjacency = Array.from({ length: n + 1 }, () => []);
    const indegree = new Array(n + 1).fill(0);
    for (const [prev, nxt] of relations) {
        adjacency[prev].push(nxt);
        indegree[nxt] += 1;
    }
    const queue = [];
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let semesters = 0;
    let taken = 0;
    // Level-by-level BFS using index ranges.
    let start = 0;
    while (start < queue.length) {
        semesters += 1;
        const end = queue.length;
        for (let idx = start; idx < end; idx++) {
            const course = queue[idx];
            taken += 1;
            for (const nxt of adjacency[course]) {
                indegree[nxt] -= 1;
                if (indegree[nxt] === 0) {
                    queue.push(nxt);
                }
            }
        }
        start = end;
    }
    return taken === n ? semesters : -1;
};
