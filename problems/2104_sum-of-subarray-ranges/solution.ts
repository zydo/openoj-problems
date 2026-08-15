function subArrayRanges(nums: number[]): number {
    const n = nums.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        let mn = nums[i],
            mx = nums[i];
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < mn) mn = nums[j];
            else if (nums[j] > mx) mx = nums[j];
            total += mx - mn;
        }
    }
    return total;
}
