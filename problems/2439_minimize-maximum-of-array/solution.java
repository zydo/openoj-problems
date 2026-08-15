class Solution {

    public int minimizeArrayValue(int[] nums) {
        long total = 0;
        int best = 0;
        for (int i = 0; i < nums.length; i++) {
            total += nums[i];
            long candidate = (total + i) / (i + 1);
            if (candidate > best) {
                best = (int) candidate;
            }
        }
        return best;
    }
}
