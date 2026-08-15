import java.util.ArrayList;
import java.util.List;

class Solution {

    public int countRangeSum(int[] nums, int lower, int upper) {
        int n = nums.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        return (int) mergeCount(prefix, 0, n, lower, upper);
    }

    private long mergeCount(
        long[] prefix,
        int lo,
        int hi,
        int lower,
        int upper
    ) {
        if (lo >= hi) {
            return 0;
        }
        int mid = (lo + hi) >>> 1;
        long count =
            mergeCount(prefix, lo, mid, lower, upper) +
            mergeCount(prefix, mid + 1, hi, lower, upper);

        int l = mid + 1;
        int r = mid + 1;
        for (int i = lo; i <= mid; i++) {
            while (l <= hi && prefix[l] - prefix[i] < lower) {
                l++;
            }
            while (r <= hi && prefix[r] - prefix[i] <= upper) {
                r++;
            }
            count += r - l;
        }

        List<Long> merged = new ArrayList<>(hi - lo + 1);
        int i = lo,
            j = mid + 1;
        while (i <= mid && j <= hi) {
            if (prefix[i] <= prefix[j]) {
                merged.add(prefix[i++]);
            } else {
                merged.add(prefix[j++]);
            }
        }
        while (i <= mid) {
            merged.add(prefix[i++]);
        }
        while (j <= hi) {
            merged.add(prefix[j++]);
        }
        for (int k = 0; k < merged.size(); k++) {
            prefix[lo + k] = merged.get(k);
        }
        return count;
    }
}
