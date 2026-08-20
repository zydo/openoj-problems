function countSubarraysWithExtremes(nums: number[], lo: number, hi: number): number {
    let count = 0;
    // most recent positions of an out-of-range element, lo, and hi
    let lastBad = -1,
        lastMin = -1,
        lastMax = -1;
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        // a valid subarray ending later must start after a bad element
        if (x < lo || x > hi) lastBad = i;
        // tracking the last occurrence is enough: it covers earlier ones
        if (x === lo) lastMin = i;
        if (x === hi) lastMax = i;
        // starts for this right end: after lastBad, at or before
        // min(lastMin, lastMax); the 0 clamp skips ends with no valid start
        count += Math.max(0, Math.min(lastMin, lastMax) - lastBad);
    }
    return count;
}
