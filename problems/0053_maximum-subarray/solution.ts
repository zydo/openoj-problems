function maxSubArray(nums: number[]): number {
    let best = nums[0];
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i];
        current = current < 0 ? value : current + value;
        if (current > best) best = current;
    }
    return best;
}
