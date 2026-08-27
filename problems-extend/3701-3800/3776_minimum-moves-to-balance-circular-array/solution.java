import java.util.*;

class Solution {

    // The single negative person is the only sink; each positive person
    // is a source whose units cost their circular distance to the sink,
    // so the cheapest sources are drained first.
    public long minMoves(int[] balance) {
        int neg = -1;
        for (int i = 0; i < balance.length; i++) {
            if (balance[i] < 0) {
                neg = i;
                break;
            }
        }
        if (neg == -1) {
            return 0;
        }
        long total = 0;
        for (int v : balance) {
            total += v;
        }
        if (total < 0) {
            return -1;
        }
        int n = balance.length;
        long need = -(long) balance[neg];
        List<int[]> sources = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (i != neg && balance[i] > 0) {
                int diff = Math.abs(i - neg);
                sources.add(new int[] {Math.min(diff, n - diff), balance[i]});
            }
        }
        sources.sort((a, b) -> Integer.compare(a[0], b[0]));
        long moves = 0;
        for (int[] src : sources) {
            if (need == 0) {
                break;
            }
            long take = Math.min(src[1], need);
            moves += take * src[0];
            need -= take;
        }
        return moves;
    }
}
