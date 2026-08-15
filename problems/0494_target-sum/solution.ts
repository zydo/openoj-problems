function findTargetSumWays(nums: number[], target: number): number {
    let dp = new Map<number, number>([[0, 1]]);
    for (const value of nums) {
        const nxt = new Map<number, number>();
        for (const [total, count] of dp) {
            nxt.set(total + value, (nxt.get(total + value) || 0) + count);
            nxt.set(total - value, (nxt.get(total - value) || 0) + count);
        }
        dp = nxt;
    }
    return dp.get(target) || 0;
}
