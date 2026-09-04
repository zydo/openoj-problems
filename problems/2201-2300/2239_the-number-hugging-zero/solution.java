class Solution {

    public int huggingZero(int[] nums) {
        int best = nums[0];
        for (int x : nums) {
            if (Math.abs(x) < Math.abs(best) || (Math.abs(x) == Math.abs(best) && x > best)) {
                best = x;
            }
        }
        return best;
    }
}
