function validArrangement(pairs: number[][]): number[][] {
    const adj = new Map<number, number[]>();
    const indeg = new Map<number, number>();
    const outdeg = new Map<number, number>();
    for (const [u, v] of pairs) {
        if (!adj.has(u)) {
            adj.set(u, []);
        }
        adj.get(u)!.push(v);
        outdeg.set(u, (outdeg.get(u) || 0) + 1);
        indeg.set(v, (indeg.get(v) || 0) + 1);
    }

    let start = pairs[0][0];
    for (const u of outdeg.keys()) {
        if ((outdeg.get(u) || 0) - (indeg.get(u) || 0) === 1) {
            start = u;
            break;
        }
    }

    const stack: number[] = [start];
    const path: number[] = [];
    while (stack.length > 0) {
        const u = stack[stack.length - 1];
        const edges = adj.get(u);
        if (edges && edges.length > 0) {
            stack.push(edges.pop()!);
        } else {
            path.push(u);
            stack.pop();
        }
    }
    path.reverse();

    const res: number[][] = [];
    for (let i = 0; i + 1 < path.length; i++) {
        res.push([path[i], path[i + 1]]);
    }
    return res;
}
