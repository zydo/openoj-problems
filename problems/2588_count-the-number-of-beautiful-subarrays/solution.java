import java.util.HashMap;
import java.util.Map;

class Solution {

    public long beautifulSubarrays(int[] nums) {
        Map<Integer, Long> count = new HashMap<>();
        count.put(0, 1L);
        int x = 0;
        long ans = 0;
        for (int v : nums) {
            x ^= v;
            ans += count.getOrDefault(x, 0L);
            count.merge(x, 1L, Long::sum);
        }
        return ans;
    }
}
