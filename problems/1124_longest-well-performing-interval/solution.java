import java.util.*;

class Solution {

    public int longestWPI(int[] hours) {
        Map<Integer, Integer> first = new HashMap<>();
        first.put(0, -1);
        int prefix = 0;
        int best = 0;
        for (int i = 0; i < hours.length; i++) {
            prefix += hours[i] > 8 ? 1 : -1;
            if (prefix > 0) {
                best = i + 1;
            } else if (first.containsKey(prefix - 1)) {
                best = Math.max(best, i - first.get(prefix - 1));
            }
            if (!first.containsKey(prefix)) {
                first.put(prefix, i);
            }
        }
        return best;
    }
}
