function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let count = 0;
    let lastBad = -1,
        lastMin = -1,
        lastMax = -1;
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (x < minK || x > maxK) lastBad = i;
        if (x === minK) lastMin = i;
        if (x === maxK) lastMax = i;
        count += Math.max(0, Math.min(lastMin, lastMax) - lastBad);
    }
    return count;
}
