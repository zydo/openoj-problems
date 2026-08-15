function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjacency: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree = new Array<number>(numCourses).fill(0);
    for (const [course, prereq] of prerequisites) {
        adjacency[prereq].push(course);
        indegree[course] += 1;
    }
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let taken = 0;
    let head = 0;
    while (head < queue.length) {
        const node = queue[head++];
        taken += 1;
        for (const nxt of adjacency[node]) {
            indegree[nxt] -= 1;
            if (indegree[nxt] === 0) {
                queue.push(nxt);
            }
        }
    }
    return taken === numCourses;
}
