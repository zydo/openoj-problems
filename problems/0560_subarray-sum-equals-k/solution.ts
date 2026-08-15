function subarraySum(nums: number[], k: number): number {
    const prefixCounts = new Map<number, number>([[0, 1]]);
    let running = 0;
    let total = 0;
    for (const value of nums) {
        running += value;
        total += prefixCounts.get(running - k) || 0;
        prefixCounts.set(running, (prefixCounts.get(running) || 0) + 1);
    }
    return total;
}
