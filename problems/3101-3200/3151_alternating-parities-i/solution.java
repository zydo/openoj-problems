class Solution {

    public boolean hasAlternatingParities(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            if ((nums[i - 1] & 1) == (nums[i] & 1)) {
                return false;
            }
        }
        return true;
    }
}
