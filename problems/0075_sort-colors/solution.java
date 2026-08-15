class Solution {

    public int[] sortColors(int[] nums) {
        int[] counts = new int[3];
        for (int value : nums) {
            counts[value]++;
        }
        int index = 0;
        for (int color = 0; color < 3; color++) {
            for (int c = 0; c < counts[color]; c++) {
                nums[index++] = color;
            }
        }
        return nums;
    }
}
