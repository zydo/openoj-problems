function getPermutationIndex(perm: number[]): number {
    const MOD = 1000000007;
    const n = perm.length;
    const fact = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        fact[i] = Number((BigInt(fact[i - 1]) * BigInt(i)) % BigInt(MOD));
    }

    const tree = new Array(n + 1).fill(0);

    function add(i: number, delta: number): void {
        while (i <= n) {
            tree[i] += delta;
            i += i & -i;
        }
    }

    function query(i: number): number {
        let s = 0;
        while (i > 0) {
            s += tree[i];
            i -= i & -i;
        }
        return s;
    }

    for (let v = 1; v <= n; v++) {
        add(v, 1);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const x = perm[i];
        const smaller = query(x - 1);
        ans = Number(
            (BigInt(ans) + BigInt(smaller) * BigInt(fact[n - 1 - i])) %
                BigInt(MOD),
        );
        add(x, -1);
    }
    return ans;
}
