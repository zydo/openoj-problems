class Solution {

    public boolean canJump(int[] nums) {
        int farthest = 0;
        int last = nums.length - 1;
        for (int index = 0; index < nums.length; index++) {
            int reach = nums[index];
            if (index > farthest) {
                return false;
            }
            if (index + reach > farthest) {
                farthest = index + reach;
            }
            if (farthest >= last) {
                return true;
            }
        }
        return true;
    }
}
