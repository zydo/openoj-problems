function countComponents(n: number, edges: number[][]): number {
    const parent: number[] = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;
    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    let count = n;
    for (const [a, b] of edges) {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
            count--;
        }
    }
    return count;
}
