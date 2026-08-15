import java.util.HashSet;
import java.util.Set;

class Solution {

    public int longestConsecutive(int[] nums) {
        Set<Long> values = new HashSet<>();
        for (int value : nums) {
            values.add((long) value);
        }
        int best = 0;
        for (long value : values) {
            if (!values.contains(value - 1)) {
                int length = 1;
                while (values.contains(value + length)) {
                    length++;
                }
                best = Math.max(best, length);
            }
        }
        return best;
    }
}
