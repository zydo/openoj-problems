import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public long maximumCoins(int[][] coins, int k) {
        int n = coins.length;
        // stable sort by left endpoint
        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) order[i] = i;
        Arrays.sort(order, Comparator.comparingInt(i -> coins[i][0]));

        long[] lefts = new long[n];
        long[] rights = new long[n];
        long[] cs = new long[n];
        for (int idx = 0; idx < n; idx++) {
            int i = order[idx];
            lefts[idx] = coins[i][0];
            rights[idx] = coins[i][1];
            cs[idx] = coins[i][2];
        }
        long[] area = new long[n];
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            area[i] = cs[i] * (rights[i] - lefts[i] + 1);
            prefix[i + 1] = prefix[i] + area[i];
        }

        long best = 0;
        for (int i = 0; i < n; i++) {
            best = Math.max(
                best,
                window(lefts, rights, cs, area, prefix, k, lefts[i])
            );
            best = Math.max(
                best,
                window(lefts, rights, cs, area, prefix, k, rights[i] - k + 1)
            );
        }
        return best;
    }

    private long window(
        long[] lefts,
        long[] rights,
        long[] cs,
        long[] area,
        long[] prefix,
        int k,
        long start
    ) {
        long end = start + k - 1;
        int a = lowerBound(rights, start); // first index with rights[i] >= start
        int b = upperBound(lefts, end) - 1; // last index with lefts[i] <= end
        if (a > b) return 0;
        long loA = Math.max(lefts[a], start);
        long hiA = Math.min(rights[a], end);
        if (a == b) {
            return loA <= hiA ? cs[a] * (hiA - loA + 1) : 0;
        }
        long loB = Math.max(lefts[b], start);
        long hiB = Math.min(rights[b], end);
        long total = prefix[b + 1] - prefix[a];
        total += cs[a] * (hiA - loA + 1) - area[a];
        total += cs[b] * (hiB - loB + 1) - area[b];
        return total;
    }

    private int lowerBound(long[] arr, long target) {
        int lo = 0,
            hi = arr.length;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    private int upperBound(long[] arr, long target) {
        int lo = 0,
            hi = arr.length;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (arr[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
}
