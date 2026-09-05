import java.util.HashMap;
import java.util.Map;

class Solution {

    public int fewestOverwrites(int[] values, int[] pool) {
        int[] b = pool.clone();
        java.util.Arrays.sort(b);
        int m = 0;
        for (int i = 0; i < b.length; i++) {
            if (i == 0 || b[i] != b[m - 1]) b[m++] = b[i];
        }
        // b[0..m) is sorted and distinct

        // dp: strictly increasing prefix whose last value is v -> min ops.
        // keeping values[0] costs 0; any smaller replacement costs 1 (larger
        // replacements are dominated by keeping)
        Map<Integer, Integer> dp = new HashMap<>();
        dp.put(values[0], 0);
        for (int i = 0; i < m; i++) {
            if (b[i] < values[0]) dp.put(b[i], 1);
        }

        for (int i = 1; i < values.length; i++) {
            Map<Integer, Integer> ndp = new HashMap<>();
            for (Map.Entry<Integer, Integer> kv : dp.entrySet()) {
                int last = kv.getKey();
                int ops = kv.getValue();
                // keep values[i] when it strictly exceeds last: no cost
                if (values[i] > last) {
                    Integer cur = ndp.get(values[i]);
                    if (cur == null || cur > ops) ndp.put(values[i], ops);
                }
                // replace with the smallest pool value > last: the smallest
                // choice leaves the most room for what follows; costs 1 op
                int idx = upperBound(b, m, last);
                if (idx < m) {
                    int v = b[idx];
                    int cost = ops + 1;
                    Integer cur = ndp.get(v);
                    if (cur == null || cur > cost) ndp.put(v, cost);
                }
            }
            dp = ndp;
            // no state survives: a strictly increasing arrangement is impossible
            if (dp.isEmpty()) return -1;
        }

        int best = Integer.MAX_VALUE;
        for (int v : dp.values()) best = Math.min(best, v);
        return best;
    }

    // index of first element strictly greater than key (bisect_right)
    private int upperBound(int[] b, int m, int key) {
        int lo = 0,
            hi = m;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (b[mid] <= key) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
}
