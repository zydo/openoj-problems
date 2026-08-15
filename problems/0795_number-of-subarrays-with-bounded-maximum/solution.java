class Solution {

    private long countBelow(int[] nums, int bound) {
        long total = 0;
        long run = 0;
        for (int v : nums) {
            if (v <= bound) {
                run += 1;
                total += run;
            } else {
                run = 0;
            }
        }
        return total;
    }

    public int numSubarrayBoundedMax(int[] nums, int left, int right) {
        return (int) (countBelow(nums, right) - countBelow(nums, left - 1));
    }
}
