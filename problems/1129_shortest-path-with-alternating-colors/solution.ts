function shortestAlternatingPaths(
    n: number,
    redEdges: number[][],
    blueEdges: number[][],
): number[] {
    // adjacency[c][u] lists endpoints of color-c edges from u.
    const adjacency: number[][][] = [
        Array.from({ length: n }, () => [] as number[]),
        Array.from({ length: n }, () => [] as number[]),
    ];
    for (const [u, v] of redEdges) {
        adjacency[0][u].push(v);
    }
    for (const [u, v] of blueEdges) {
        adjacency[1][u].push(v);
    }

    const INF = Infinity;
    const dist: number[][] = Array.from({ length: n }, () => [INF, INF]);
    dist[0][0] = 0; // arrived at 0 via a red edge (virtual start)
    dist[0][1] = 0;
    const answer: number[] = new Array(n).fill(-1);
    answer[0] = 0;
    const queue: [number, number][] = [
        [0, 0],
        [0, 1],
    ];
    let head = 0;
    while (head < queue.length) {
        const [node, color] = queue[head];
        head += 1;
        for (const nxt of adjacency[1 - color][node]) {
            if (dist[nxt][1 - color] === INF) {
                dist[nxt][1 - color] = dist[node][color] + 1;
                const value = dist[nxt][1 - color];
                answer[nxt] =
                    answer[nxt] === -1 ? value : Math.min(answer[nxt], value);
                queue.push([nxt, 1 - color]);
            }
        }
    }
    return answer;
}
