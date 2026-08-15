function maxSubarraySum(nums: number[], k: number): number {
    const n = nums.length;
    const prefix: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const INF = Infinity;
    const minPref: number[] = new Array(k).fill(INF);
    let best = -Infinity;
    for (let i = 0; i <= n; i++) {
        const r = i % k;
        if (minPref[r] !== INF) {
            const cand = prefix[i] - minPref[r];
            if (cand > best) {
                best = cand;
            }
        }
        if (prefix[i] < minPref[r]) {
            minPref[r] = prefix[i];
        }
    }
    return best;
}
