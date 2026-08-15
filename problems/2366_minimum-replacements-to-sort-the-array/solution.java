class Solution {

    public long minimumReplacement(int[] nums) {
        long ops = 0;
        long bound = nums[nums.length - 1];
        for (int i = nums.length - 2; i >= 0; i--) {
            long x = nums[i];
            if (x <= bound) {
                bound = x;
            } else {
                long k = (x + bound - 1) / bound;
                ops += k - 1;
                bound = x / k;
            }
        }
        return ops;
    }
}
