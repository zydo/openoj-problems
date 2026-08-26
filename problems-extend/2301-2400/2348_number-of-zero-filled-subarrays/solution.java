class Solution {

    public long zeroFilledSubarray(int[] nums) {
        long total = 0;
        long streak = 0;
        for (int num : nums) {
            if (num == 0) {
                streak++;
                total += streak;
            } else {
                streak = 0;
            }
        }
        return total;
    }
}
