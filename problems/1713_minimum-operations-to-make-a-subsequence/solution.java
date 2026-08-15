import java.util.HashMap;
import java.util.Map;

class Solution {

    public int minOperations(int[] target, int[] arr) {
        Map<Integer, Integer> index = new HashMap<>();
        for (int i = 0; i < target.length; i++) {
            index.put(target[i], i);
        }
        int[] tails = new int[arr.length];
        int len = 0;
        for (int value : arr) {
            Integer idx = index.get(value);
            if (idx == null) continue;
            int v = idx;
            int lo = 0,
                hi = len;
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (tails[mid] < v) lo = mid + 1;
                else hi = mid;
            }
            if (lo == len) {
                tails[len++] = v;
            } else {
                tails[lo] = v;
            }
        }
        return target.length - len;
    }
}
