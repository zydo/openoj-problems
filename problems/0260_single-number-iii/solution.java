import java.util.Arrays;

class Solution {

    public int[] singleNumber(int[] nums) {
        int total = 0;
        for (int value : nums) {
            total ^= value;
        }
        int mask = total & -total;
        int first = 0;
        for (int value : nums) {
            if ((value & mask) != 0) {
                first ^= value;
            }
        }
        int second = total ^ first;
        return new int[] { Math.min(first, second), Math.max(first, second) };
    }
}
