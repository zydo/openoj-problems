function farApartPair(nums: number[], indexGap: number, valueGap: number): number[] {
    // The first ordered pair (i, j) clearing both thresholds is a valid
    // answer by the statement's "return any of them"; the conditions are
    // symmetric in the two indices, so scan order only picks the witness.
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
            if (Math.abs(i - j) >= indexGap && Math.abs(nums[i] - nums[j]) >= valueGap) {
                return [i, j];
            }
        }
    }
    // Every ordered pair failed both checks, so no answer exists.
    return [-1, -1];
}
