function numSimilarGroups(strs: string[]): number {
    const similar = (a: string, b: string): boolean => {
        let mismatches = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                mismatches++;
                if (mismatches > 2) {
                    return false;
                }
            }
        }
        return mismatches === 0 || mismatches === 2;
    };

    const n = strs.length;
    const parent: number[] = Array.from({ length: n }, (_, i) => i);

    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (similar(strs[i], strs[j])) {
                const ri = find(i);
                const rj = find(j);
                if (ri !== rj) {
                    parent[ri] = rj;
                }
            }
        }
    }

    const roots = new Set<number>();
    for (let i = 0; i < n; i++) {
        roots.add(find(i));
    }
    return roots.size;
}
