function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) {
        return -1;
    }
    const parent: number[] = Array.from({ length: n }, (_, i) => i);
    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let components = n;
    for (const [a, b] of connections) {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            components--;
        }
    }
    return components - 1;
}
