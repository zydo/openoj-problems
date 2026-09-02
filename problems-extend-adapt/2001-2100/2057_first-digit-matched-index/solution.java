class Solution {

    public int firstDigitMatch(int[] nums) {
        for (int index = 0; index < nums.length; index++) {
            if (index % 10 == nums[index]) {
                return index;
            }
        }
        return -1;
    }
}
