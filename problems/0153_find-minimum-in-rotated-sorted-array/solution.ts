function findMin(nums: number[]): number {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return nums[lo];
}
