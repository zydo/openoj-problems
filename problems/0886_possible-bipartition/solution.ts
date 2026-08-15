function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const adjacency: number[][] = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of dislikes) {
        adjacency[a].push(b);
        adjacency[b].push(a);
    }

    const color: number[] = new Array(n + 1).fill(0); // 0 = uncolored, 1 / -1 = the two groups
    for (let start = 1; start <= n; start++) {
        if (color[start] !== 0) {
            continue;
        }
        color[start] = 1;
        const queue: number[] = [start];
        for (let head = 0; head < queue.length; head++) {
            const person = queue[head];
            for (const neighbor of adjacency[person]) {
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[person];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[person]) {
                    return false;
                }
            }
        }
    }
    return true;
}
