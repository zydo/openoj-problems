class Solution {

    public int singleNumber(int[] nums) {
        int result = 0;
        for (int i = 0; i < 32; ++i) {
            int count = 0;
            for (int value : nums) {
                count += (value >> i) & 1;
            }
            if (count % 3 != 0) {
                result |= 1 << i;
            }
        }
        return result;
    }
}
