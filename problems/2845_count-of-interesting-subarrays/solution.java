import java.util.HashMap;
import java.util.Map;

class Solution {

    public long countInterestingSubarrays(int[] nums, int modulo, int k) {
        Map<Integer, Long> count = new HashMap<>();
        count.put(0, 1L);
        int pref = 0;
        long ans = 0;
        for (int x : nums) {
            if (x % modulo == k) pref++;
            int need = Math.floorMod(pref - k, modulo);
            ans += count.getOrDefault(need, 0L);
            int key = pref % modulo;
            count.merge(key, 1L, Long::sum);
        }
        return ans;
    }
}
