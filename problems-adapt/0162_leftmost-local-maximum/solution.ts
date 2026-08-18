function leftmostLocalMaximum(nums: number[]): number {
    const n = nums.length;
    // Scan left to right and stop at the first descent - the direct route to
    // the leftmost qualifying index, which halving search cannot guarantee.
    for (let i = 0; i < n; i++) {
        // There is no neighbour beyond either end, so the
        // edge tests pass vacuously there.
        const leftOk = i === 0 || nums[i] > nums[i - 1];
        const rightOk = i === n - 1 || nums[i] > nums[i + 1];
        if (leftOk && rightOk) {
            return i;
        }
    }
    // Unreachable: a qualifying index always exists.
    return -1;
}
