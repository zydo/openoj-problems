function canPartition(nums: number[]): boolean {
    let total = 0;
    for (const v of nums) total += v;
    if (total % 2 !== 0) return false;
    const target = total / 2;
    const dp = new Array<boolean>(target + 1).fill(false);
    dp[0] = true;
    for (const v of nums) {
        for (let j = target; j >= v; j--) {
            if (dp[j - v]) dp[j] = true;
        }
        if (dp[target]) return true;
    }
    return dp[target];
}
