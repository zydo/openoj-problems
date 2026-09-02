function farApartPair(nums: number[], indexGap: number, valueGap: number): number[] {
    // For each later index j, every legal partner t satisfies
    // t <= j - indexGap, and the largest |nums[t] - nums[j]| over
    // that window is attained at its minimum or maximum, so remembering
    // the first index of each extreme as the window grows is enough.
    // Testing the minimum candidate before the maximum, and keeping
    // first occurrences on ties, pins one deterministic answer out of
    // the many the statement permits.
    const n = nums.length;
    let minIdx = -1;
    let maxIdx = -1;
    for (let j = 0; j < n; ++j) {
        const t = j - indexGap;
        if (t < 0) {
            continue;
        }
        if (minIdx === -1 || nums[t] < nums[minIdx]) {
            minIdx = t;
        }
        if (maxIdx === -1 || nums[t] > nums[maxIdx]) {
            maxIdx = t;
        }
        if (Math.abs(nums[j] - nums[minIdx]) >= valueGap) {
            return [minIdx, j];
        }
        if (Math.abs(nums[j] - nums[maxIdx]) >= valueGap) {
            return [maxIdx, j];
        }
    }
    return [-1, -1];
}
