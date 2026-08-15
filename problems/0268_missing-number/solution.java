class Solution {

    public int missingNumber(int[] nums) {
        int n = nums.length;
        long total = 0;
        for (int value : nums) {
            total += value;
        }
        return (int) (((long) n * (n + 1)) / 2 - total);
    }
}
