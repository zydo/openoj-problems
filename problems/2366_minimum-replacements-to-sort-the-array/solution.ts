function minimumReplacement(nums: number[]): number {
    let ops = 0;
    let bound = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        const x = nums[i];
        if (x <= bound) {
            bound = x;
        } else {
            const k = Math.floor((x + bound - 1) / bound);
            ops += k - 1;
            bound = Math.floor(x / k);
        }
    }
    return ops;
}
