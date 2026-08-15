function singleNumber(nums: number[]): number[] {
    let total = 0;
    for (const value of nums) {
        total ^= value;
    }
    const mask = total & -total;
    let first = 0;
    for (const value of nums) {
        if ((value & mask) !== 0) {
            first ^= value;
        }
    }
    const second = total ^ first;
    return [Math.min(first, second), Math.max(first, second)];
}
