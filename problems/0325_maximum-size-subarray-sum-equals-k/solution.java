import java.util.HashMap;
import java.util.Map;

class Solution {

    public int maxSubArrayLen(int[] nums, int k) {
        Map<Long, Integer> first = new HashMap<>();
        first.put(0L, -1);
        long acc = 0;
        int best = 0;
        for (int i = 0; i < nums.length; ++i) {
            acc += nums[i];
            Integer j = first.get(acc - (long) k);
            if (j != null && i - j > best) {
                best = i - j;
            }
            first.putIfAbsent(acc, i);
        }
        return best;
    }
}
