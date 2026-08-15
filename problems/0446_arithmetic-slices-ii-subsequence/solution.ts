function numberOfArithmeticSlices(nums: number[]): number {
    const n = nums.length;
    const dp: Map<number, number>[] = new Array(n);
    for (let i = 0; i < n; i++) dp[i] = new Map<number, number>();
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j];
            const cnt = dp[j].get(d) || 0;
            total += cnt;
            dp[i].set(d, (dp[i].get(d) || 0) + cnt + 1);
        }
    }
    return total;
}
