import java.util.HashMap;
import java.util.Map;

class Solution {

    public int widestPairOfIndices(int[] nums1, int[] nums2) {
        Map<Integer, Integer> first = new HashMap<>();
        first.put(0, -1);
        int diff = 0;
        int best = 0;
        for (int i = 0; i < nums1.length; i++) {
            diff += nums1[i] - nums2[i];
            Integer prev = first.get(diff);
            if (prev != null) {
                int w = i - prev;
                if (w > best) best = w;
            } else {
                first.put(diff, i);
            }
        }
        return best;
    }
}
