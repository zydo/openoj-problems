/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adjacency = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    for (const [course, prereq] of prerequisites) {
        adjacency[prereq].push(course);
        indegree[course] += 1;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    const order = [];
    let head = 0;
    while (head < queue.length) {
        const node = queue[head++];
        order.push(node);
        for (const nxt of adjacency[node]) {
            indegree[nxt] -= 1;
            if (indegree[nxt] === 0) {
                queue.push(nxt);
            }
        }
    }
    if (order.length === numCourses) {
        return order;
    }
    return [];
};
