function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let zeros = 0;
    let best = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeros++;
        }
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        if (right - left + 1 > best) {
            best = right - left + 1;
        }
    }
    return best;
}
