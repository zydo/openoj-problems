function canTraverseAllPairs(nums: number[]): boolean {
    const n = nums.length;
    if (n === 1) return true;
    for (const x of nums) {
        if (x === 1) return false;
    }

    let maxv = 0;
    for (const x of nums) {
        if (x > maxv) maxv = x;
    }
    const spf: number[] = new Array(maxv + 1);
    for (let i = 0; i <= maxv; i++) spf[i] = i;
    for (let i = 2; i * i <= maxv; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= maxv; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    const parent: number[] = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a: number, b: number): void => {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    };

    const last = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        let v = nums[i];
        while (v > 1) {
            const p = spf[v];
            if (last.has(p)) union(i, last.get(p)!);
            last.set(p, i);
            while (v % p === 0) v = Math.floor(v / p);
        }
    }

    const root = find(0);
    for (let i = 1; i < n; i++) {
        if (find(i) !== root) return false;
    }
    return true;
}
