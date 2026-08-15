import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int x : nums) {
            counts.merge(x, 1, Integer::sum);
        }
        List<int[]> items = new ArrayList<>();
        for (Map.Entry<Integer, Integer> e : counts.entrySet()) {
            items.add(new int[] { e.getKey(), e.getValue() });
        }
        items.sort((a, b) -> {
            if (a[1] != b[1]) return Integer.compare(b[1], a[1]);
            return Integer.compare(a[0], b[0]);
        });
        int[] result = new int[k];
        for (int i = 0; i < k; ++i) {
            result[i] = items.get(i)[0];
        }
        return result;
    }
}
