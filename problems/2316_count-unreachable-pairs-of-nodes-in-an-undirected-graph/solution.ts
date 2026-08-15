function countPairs(n: number, edges: number[][]): number {
    const parent = new Int32Array(n);
    const size = new Int32Array(n).fill(1);
    for (let i = 0; i < n; i++) parent[i] = i;

    function find(x: number): number {
        let root = x;
        while (parent[root] !== root) root = parent[root];
        while (parent[x] !== root) {
            const next = parent[x];
            parent[x] = root;
            x = next;
        }
        return root;
    }

    for (const [a, b] of edges) {
        let ra = find(a),
            rb = find(b);
        if (ra !== rb) {
            if (size[ra] < size[rb]) {
                const tmp = ra;
                ra = rb;
                rb = tmp;
            }
            parent[rb] = ra;
            size[ra] += size[rb];
        }
    }

    let reachable = 0;
    for (let v = 0; v < n; v++) {
        if (find(v) === v) {
            reachable += (size[v] * (size[v] - 1)) / 2;
        }
    }
    return (n * (n - 1)) / 2 - reachable;
}
