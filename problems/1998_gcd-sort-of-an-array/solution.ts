function gcdSort(nums: number[]): boolean {
    const MX = 100001;
    const spf = new Array<number>(MX);
    for (let i = 0; i < MX; i++) {
        spf[i] = i;
    }
    for (let i = 2; i * i < MX; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j < MX; j += i) {
                if (spf[j] === j) {
                    spf[j] = i;
                }
            }
        }
    }

    const parent = new Array<number>(MX);
    for (let i = 0; i < MX; i++) {
        parent[i] = i;
    }

    const find = (a: number): number => {
        while (parent[a] !== a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    };

    const union = (a: number, b: number): void => {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) {
            parent[ra] = rb;
        }
    };

    for (const x of nums) {
        let v = x;
        while (v > 1) {
            const p = spf[v];
            union(x, p);
            while (v % p === 0) {
                v /= p;
            }
        }
    }

    const target = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (find(nums[i]) !== find(target[i])) {
            return false;
        }
    }
    return true;
}
