class Solution {

    public int[] getSumAbsoluteDifferences(int[] nums) {
        int n = nums.length;
        long total = 0;
        for (int x : nums) total += x;
        long prefix = 0;
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            long left = (long) x * i - prefix;
            long suffix = total - prefix - x;
            long right = suffix - (long) x * (n - i - 1);
            result[i] = (int) (left + right);
            prefix += x;
        }
        return result;
    }
}
