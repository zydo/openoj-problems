import java.util.ArrayList;
import java.util.List;

class Solution {

    public int minOperations(int[] nums) {
        List<Integer> tails = new ArrayList<>();
        for (int x : nums) {
            int v = -x;
            int lo = 0,
                hi = tails.size();
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (tails.get(mid) <= v) lo = mid + 1;
                else hi = mid;
            }
            if (lo == tails.size()) tails.add(v);
            else tails.set(lo, v);
        }
        return tails.size();
    }
}
