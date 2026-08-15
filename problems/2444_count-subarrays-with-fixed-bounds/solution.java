class Solution {

    public long countSubarrays(int[] nums, int minK, int maxK) {
        long count = 0;
        long lastBad = -1,
            lastMin = -1,
            lastMax = -1;
        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            if (x < minK || x > maxK) lastBad = i;
            if (x == minK) lastMin = i;
            if (x == maxK) lastMax = i;
            count += Math.max(0L, Math.min(lastMin, lastMax) - lastBad);
        }
        return count;
    }
}
