function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let index = 0; index < nums.length; ++index) {
        const earlier = seen.get(target - nums[index]);
        if (earlier !== undefined) return [earlier, index];
        seen.set(nums[index], index);
    }
    return [];
}
