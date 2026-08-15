class Solution {

    public long maxRunTime(int n, int[] batteries) {
        long sum = 0;
        for (int b : batteries) {
            sum += b;
        }
        long lo = 0;
        long hi = sum / n;
        while (lo < hi) {
            long mid = (lo + hi + 1) / 2;
            if (feasible(mid, n, batteries)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean feasible(long t, int n, int[] batteries) {
        long total = 0;
        for (int b : batteries) {
            total += Math.min(b, t);
        }
        return total >= (long) n * t;
    }
}
