function colorTheGrid(m: number, n: number): number {
    const MOD = 1000000007;

    // Enumerate all valid column colorings (adjacent rows differ).
    const states: number[][] = [];
    const total = Math.pow(3, m);
    for (let code = 0; code < total; code++) {
        const col: number[] = [];
        let c = code;
        let ok = true;
        for (let r = 0; r < m; r++) {
            col.push(c % 3);
            c = Math.floor(c / 3);
        }
        for (let r = 0; r + 1 < m; r++) {
            if (col[r] === col[r + 1]) ok = false;
        }
        if (ok) states.push(col);
    }

    const len = states.length;
    const compat: number[][] = [];
    for (let i = 0; i < len; i++) {
        const list: number[] = [];
        for (let j = 0; j < len; j++) {
            let ok = true;
            for (let r = 0; r < m; r++) {
                if (states[i][r] === states[j][r]) ok = false;
            }
            if (ok) list.push(j);
        }
        compat.push(list);
    }

    let cur = new Array<number>(len).fill(1);
    for (let step = 0; step < n - 1; step++) {
        const nxt = new Array<number>(len).fill(0);
        for (let i = 0; i < len; i++) {
            const c = cur[i];
            if (c) {
                for (const j of compat[i]) {
                    nxt[j] = (nxt[j] + c) % MOD;
                }
            }
        }
        cur = nxt;
    }
    let ans = 0;
    for (const c of cur) ans = (ans + c) % MOD;
    return ans;
}
