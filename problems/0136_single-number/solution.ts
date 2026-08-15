function singleNumber(nums: number[]): number {
    let result = 0;
    for (const value of nums) {
        result ^= value;
    }
    return result;
}
