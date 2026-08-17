function findKthLargest(nums: number[], k: number): number {
    // Sort a copy ascending (numeric comparator — default sort is lexical);
    // the kth largest sits k slots from the end.
    const sorted = nums.slice().sort((a, b) => a - b);
    return sorted[sorted.length - k];
}
