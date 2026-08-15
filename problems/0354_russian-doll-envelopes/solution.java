import java.util.ArrayList;
import java.util.List;

class Solution {

    public int maxEnvelopes(int[][] envelopes) {
        List<int[]> sorted = new ArrayList<>();
        for (int[] e : envelopes) sorted.add(e);
        sorted.sort((a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(b[1], a[1])
        );
        List<Integer> tails = new ArrayList<>();
        for (int[] e : sorted) {
            int x = e[1];
            int lo = 0,
                hi = tails.size();
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (tails.get(mid) < x) lo = mid + 1;
                else hi = mid;
            }
            if (lo == tails.size()) tails.add(x);
            else tails.set(lo, x);
        }
        return tails.size();
    }
}
