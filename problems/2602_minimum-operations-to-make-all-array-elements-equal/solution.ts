function minOperations(nums: number[], queries: number[]): number[] {
    nums = nums.slice().sort((a, b) => a - b);
    const n = nums.length;
    const prefix: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const out: number[] = [];
    for (const q of queries) {
        let lo = 0,
            hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (nums[mid] < q) lo = mid + 1;
            else hi = mid;
        }
        const j = lo;
        const left = q * j - prefix[j];
        const right = prefix[n] - prefix[j] - q * (n - j);
        out.push(left + right);
    }
    return out;
}
