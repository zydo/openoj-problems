/**
 * @param {number} courseCount
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var coursePrerequisiteQueries = function (courseCount, prerequisites, queries) {
    const adjacency = Array.from({ length: courseCount }, () => []);
    const indegree = new Array(courseCount).fill(0);
    for (const [a, b] of prerequisites) {
        adjacency[a].push(b);
        indegree[b]++;
    }
    const bits = 30;
    const words = Math.ceil(courseCount / bits);
    // reach[v] is a bitset (30-bit chunks) of the courses that reach course v
    const reach = Array.from({ length: courseCount }, () => new Array(words).fill(0));
    const queue = [];
    for (let i = 0; i < courseCount; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    for (let head = 0; head < queue.length; head++) {
        const u = queue[head];
        for (const v of adjacency[u]) {
            reach[v][(u / bits) | 0] |= 1 << (u % bits);
            for (let w = 0; w < words; w++) {
                reach[v][w] |= reach[u][w];
            }
            if (--indegree[v] === 0) {
                queue.push(v);
            }
        }
    }
    return queries.map(([u, v]) => (reach[v][(u / bits) | 0] & (1 << (u % bits))) !== 0);
};
