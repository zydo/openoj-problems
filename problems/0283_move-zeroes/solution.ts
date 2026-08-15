function moveZeroes(nums: number[]): number[] {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            const tmp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = tmp;
            slow++;
        }
    }
    return nums;
}
