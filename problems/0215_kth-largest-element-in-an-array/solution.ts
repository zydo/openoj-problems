function findKthLargest(nums: number[], k: number): number {
    const sorted = nums.slice().sort((a, b) => a - b);
    return sorted[sorted.length - k];
}
