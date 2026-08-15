class Solution {

    public long minimumOperations(int[] nums, int[] target) {
        long prev = 0;
        long total = 0;
        for (int i = 0; i < nums.length; i++) {
            long cur = (long) nums[i] - target[i];
            if (cur > prev) total += cur - prev;
            prev = cur;
        }
        if (prev < 0) total += -prev;
        return total;
    }
}
