function missingNumber(nums: number[]): number {
    const n = nums.length;
    let total = 0;
    for (const value of nums) {
        total += value;
    }
    return (n * (n + 1)) / 2 - total;
}
