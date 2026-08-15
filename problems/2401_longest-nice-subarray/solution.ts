function longestNiceSubarray(nums: number[]): number {
    let best = 1;
    let left = 0;
    let windowOr = 0;
    for (let right = 0; right < nums.length; right++) {
        const value = nums[right];
        while ((windowOr & value) !== 0) {
            windowOr ^= nums[left];
            left++;
        }
        windowOr |= value;
        if (right - left + 1 > best) {
            best = right - left + 1;
        }
    }
    return best;
}
