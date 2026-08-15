class Solution {

    public int findPeakElement(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            boolean leftOk = i == 0 || nums[i] > nums[i - 1];
            boolean rightOk = i == n - 1 || nums[i] > nums[i + 1];
            if (leftOk && rightOk) {
                return i;
            }
        }
        return -1;
    }
}
