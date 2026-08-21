import java.util.Arrays;

class Solution {

    public int[] countClearingProducts(int[] factors, int[] values, long threshold) {
        // a pair works iff factor * value >= threshold, i.e. value >= need;
        // qualifying values are exactly the strongest suffix of the sorted array
        Arrays.sort(values);
        int n = factors.length;
        int m = values.length;
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            // ceil(threshold / factor) in integer arithmetic: exact even at 1e10
            long need = (threshold + factors[i] - 1) / factors[i];
            // first index with values[idx] >= need
            int lo = 0,
                hi = m;
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (values[mid] >= need) hi = mid;
                else lo = mid + 1;
            }
            // every value from lo on is >= need: that suffix all qualifies
            res[i] = m - lo;
        }
        return res;
    }
}
