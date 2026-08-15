function smallestDistancePair(nums: number[], k: number): number {
    nums = nums.slice().sort((a, b) => a - b);
    const n = nums.length;

    const countLe = (dist: number): number => {
        let cnt = 0;
        let j = 0;
        for (let i = 0; i < n; i++) {
            while (j < n && nums[j] - nums[i] <= dist) {
                j++;
            }
            cnt += j - i - 1;
        }
        return cnt;
    };

    let lo = 0;
    let hi = nums[n - 1] - nums[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countLe(mid) >= k) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
