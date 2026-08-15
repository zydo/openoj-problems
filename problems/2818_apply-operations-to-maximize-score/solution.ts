function maximumScore(nums: number[], k: number): number {
    const MOD = 1000000007;
    const S = 32768; // 2^15
    const mulmod = (a: number, b: number): number => {
        a %= MOD;
        b %= MOD;
        const a1 = Math.floor(a / S);
        const a0 = a - a1 * S;
        return (((a1 * b) % MOD) * S + a0 * b) % MOD;
    };
    const modpow = (base: number, e: number): number => {
        let r = 1;
        let b = base % MOD;
        let ex = e;
        while (ex > 0) {
            if (ex % 2 === 1) r = mulmod(r, b);
            b = mulmod(b, b);
            ex = Math.floor(ex / 2);
        }
        return r;
    };

    const n = nums.length;
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

    const scores: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        let v = nums[i];
        let cnt = 0;
        let lastp = -1;
        while (v > 1) {
            const p = spf[v];
            if (p !== lastp) {
                cnt += 1;
                lastp = p;
            }
            while (v % p === 0) v = Math.floor(v / p);
        }
        scores[i] = cnt;
    }

    const left: number[] = new Array(n);
    let stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && scores[stack[stack.length - 1]] < scores[i])
            stack.pop();
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    const right: number[] = new Array(n);
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && scores[stack[stack.length - 1]] <= scores[i])
            stack.pop();
        right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    const idx: number[] = Array.from({ length: n }, (_, i) => i);
    idx.sort((a, b) => nums[b] - nums[a]);

    let score = 1;
    let rem = k;
    for (const i of idx) {
        const cnt = (i - left[i]) * (right[i] - i);
        const use = Math.min(cnt, rem);
        if (use > 0) {
            score = mulmod(score, modpow(nums[i], use));
            rem -= use;
        }
        if (rem === 0) break;
    }
    return score;
}
