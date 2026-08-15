import java.util.*;

class Solution {

    public int earliestFullBloom(int[] plantTime, int[] growTime) {
        int n = plantTime.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) {
            idx[i] = i;
        }
        Arrays.sort(idx, (a, b) -> growTime[b] - growTime[a]);
        int best = 0;
        int prefix = 0;
        for (int i : idx) {
            prefix += plantTime[i];
            best = Math.max(best, prefix + growTime[i]);
        }
        return best;
    }
}
