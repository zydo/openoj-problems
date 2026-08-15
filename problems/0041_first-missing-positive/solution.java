class Solution {

    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            while (
                nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] != nums[i]
            ) {
                int target = nums[i] - 1;
                int tmp = nums[i];
                nums[i] = nums[target];
                nums[target] = tmp;
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        return n + 1;
    }
}
