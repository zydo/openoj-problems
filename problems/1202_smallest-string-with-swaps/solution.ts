function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    const n = s.length;
    const parent: number[] = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    for (const [a, b] of pairs) {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    }

    const groups = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root)!.push(i);
    }

    const result = s.split("");
    for (const indices of groups.values()) {
        const chars = indices.map((i) => result[i]).sort();
        indices.sort((a, b) => a - b);
        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = chars[i];
        }
    }
    return result.join("");
}
