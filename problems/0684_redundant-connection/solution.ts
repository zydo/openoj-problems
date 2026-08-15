function findRedundantConnection(edges: number[][]): number[] {
    const parent = new Map<number, number>();

    const find = function (node: number): number {
        let root = node;
        while (parent.get(root) !== root) {
            root = parent.get(root)!;
        }
        while (parent.get(node) !== root) {
            const next = parent.get(node)!;
            parent.set(node, root);
            node = next;
        }
        return root;
    };

    const union = function (a: number, b: number): boolean {
        if (!parent.has(a)) {
            parent.set(a, a);
        }
        if (!parent.has(b)) {
            parent.set(b, b);
        }
        const ra = find(a);
        const rb = find(b);
        if (ra === rb) {
            return false;
        }
        parent.set(ra, rb);
        return true;
    };

    for (const [a, b] of edges) {
        if (!union(a, b)) {
            return [a, b];
        }
    }
    return [];
}
