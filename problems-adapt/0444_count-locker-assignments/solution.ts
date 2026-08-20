function countLockerAssignments(lockers: number[][]): number {
    const MOD = 1000000007;
    const n = lockers.length;
    const full = (1 << n) - 1;
    const h2p: number[][] = Array.from({ length: 41 }, () => []);
    for (let p = 0; p < n; p++) {
        for (const h of lockers[p]) {
            h2p[h].push(p);
        }
    }
    // dp[mask]: ways to give a locker to exactly the people in mask using lockers so far
    // (<=10 people -> 1024 states; lockers fold into the loop dimension)
    let dp: number[] = new Array(full + 1).fill(0);
    dp[0] = 1;
    for (let h = 1; h <= 40; h++) {
        const people = h2p[h];
        if (people.length === 0) {
            continue;
        }
        // copy encodes leaving this locker unused; updating into the copy
        // (reading old dp) also ensures no locker is taken by two people
        const ndp = dp.slice();
        for (let mask = 0; mask <= full; mask++) {
            const v = dp[mask];
            if (v === 0) {
                continue;
            }
            for (const p of people) {
                const bit = 1 << p;
                if ((mask & bit) === 0) {
                    const nm = mask | bit;
                    ndp[nm] = (ndp[nm] + v) % MOD;
                }
            }
        }
        dp = ndp;
    }
    // full mask: every person gets a locker; unused lockers cost nothing
    return dp[full];
}
