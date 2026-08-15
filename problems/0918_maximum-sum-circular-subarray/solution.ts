function maxSubarraySumCircular(nums: number[]): number {
    const total = nums.reduce((a, b) => a + b, 0);
    let curMax = nums[0],
        bestMax = nums[0];
    let curMin = nums[0],
        bestMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];
        curMax = x + Math.max(curMax, 0);
        bestMax = Math.max(bestMax, curMax);
        curMin = x + Math.min(curMin, 0);
        bestMin = Math.min(bestMin, curMin);
    }
    if (bestMax < 0) {
        return bestMax;
    }
    return Math.max(bestMax, total - bestMin);
}
