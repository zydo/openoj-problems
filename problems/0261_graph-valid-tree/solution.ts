function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) {
        return false;
    }
    const parent: number[] = Array.from({ length: n }, (_, i) => i);
    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    for (const [a, b] of edges) {
        const ra = find(a);
        const rb = find(b);
        if (ra === rb) {
            return false;
        }
        parent[ra] = rb;
    }
    return true;
}
