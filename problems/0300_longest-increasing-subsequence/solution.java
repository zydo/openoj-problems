import java.util.ArrayList;
import java.util.List;

class Solution {

    public int lengthOfLIS(int[] nums) {
        List<Integer> tails = new ArrayList<>();
        for (int x : nums) {
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
