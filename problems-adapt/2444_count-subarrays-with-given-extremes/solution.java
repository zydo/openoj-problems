class Solution {

    public long countSubarraysWithExtremes(int[] nums, int lo, int hi) {
        long count = 0;
        // most recent positions of an out-of-range element, lo, and hi
        long lastBad = -1,
            lastMin = -1,
            lastMax = -1;
        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            // a valid subarray ending later must start after a bad element
            if (x < lo || x > hi) lastBad = i;
            // tracking the last occurrence is enough: it covers earlier ones
            if (x == lo) lastMin = i;
            if (x == hi) lastMax = i;
            // starts for this right end: after lastBad, at or before
            // min(lastMin, lastMax); the 0 clamp skips ends with no valid start
            count += Math.max(0L, Math.min(lastMin, lastMax) - lastBad);
        }
        return count;
    }
}
