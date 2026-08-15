import java.util.ArrayList;
import java.util.List;

class Solution {

    public int kIncreasing(int[] arr, int k) {
        int operations = 0;
        for (int start = 0; start < k; start++) {
            List<Integer> sub = new ArrayList<>();
            for (int i = start; i < arr.length; i += k) {
                sub.add(arr[i]);
            }
            operations += sub.size() - longestNondecreasing(sub);
        }
        return operations;
    }

    private int longestNondecreasing(List<Integer> seq) {
        List<Integer> tails = new ArrayList<>();
        for (int value : seq) {
            int lo = 0;
            int hi = tails.size();
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (tails.get(mid) <= value) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            if (lo == tails.size()) {
                tails.add(value);
            } else {
                tails.set(lo, value);
            }
        }
        return tails.size();
    }
}
