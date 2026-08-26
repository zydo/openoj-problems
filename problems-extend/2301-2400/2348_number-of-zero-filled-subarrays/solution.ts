function zeroFilledSubarray(nums: number[]): number {
    let total = 0;
    let streak = 0;
    for (const num of nums) {
        if (num === 0) {
            streak++;
            total += streak;
        } else {
            streak = 0;
        }
    }
    return total;
}
