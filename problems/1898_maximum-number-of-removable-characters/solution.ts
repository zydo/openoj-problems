function maximumRemovals(s: string, p: string, removable: number[]): number {
    const stillSubsequence = (k: number): boolean => {
        const removed = new Array<boolean>(s.length).fill(false);
        for (let i = 0; i < k; i++) removed[removable[i]] = true;
        let pi = 0;
        for (let i = 0; i < s.length && pi < p.length; i++) {
            if (!removed[i] && s[i] === p[pi]) pi++;
        }
        return pi === p.length;
    };

    let lo = 0,
        hi = removable.length;
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (stillSubsequence(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
