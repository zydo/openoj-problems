import java.util.HashMap;
import java.util.Map;

class Solution {

    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);
        int running = 0;
        int total = 0;
        for (int value : nums) {
            running += value;
            total += prefixCounts.getOrDefault(running - k, 0);
            prefixCounts.merge(running, 1, Integer::sum);
        }
        return total;
    }
}
