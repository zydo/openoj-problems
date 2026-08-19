import java.util.Arrays;

class Solution {

    public long leastTotalTravel(int[] units, int[][] stations) {
        int[] rob = units.clone();
        Arrays.sort(rob);
        int[][] fac = stations.clone();
        Arrays.sort(fac, (a, b) -> a[0] != b[0] ? Integer.compare(a[0], b[0]) : Integer.compare(a[1], b[1]));
        // Optimal plans are non-crossing (triangle inequality), so after
        // sorting, each station serves a contiguous block of units in order.
        int n = rob.length;
        long INF = Long.MAX_VALUE / 4;
        // dp[i] = min distance to serve the first i units with the
        // stations processed so far; only i = 0 is reachable initially.
        long[] dp = new long[n + 1];
        Arrays.fill(dp, INF);
        dp[0] = 0;
        for (int[] f : fac) {
            long pos = f[0];
            int limit = f[1];
            // pref[i] = sum of |units[j] - pos| for j < i: prefix differences
            // give any contiguous block's distance to this station.
            long[] pref = new long[n + 1];
            for (int i = 0; i < n; i++) {
                long d = rob[i] - pos;
                pref[i + 1] = pref[i] + (d < 0 ? -d : d);
            }
            long[] ndp = dp.clone();
            for (int i = 1; i <= n; i++) {
                // dp[i] carried over = skip this station (zero assignments).
                long best = dp[i];
                // This station absorbs the trailing t units i-t..i-1.
                int maxT = Math.min(limit, i);
                for (int t = 1; t <= maxT; t++) {
                    if (dp[i - t] == INF) {
                        continue;
                    }
                    long val = dp[i - t] + pref[i] - pref[i - t];
                    if (val < best) {
                        best = val;
                    }
                }
                ndp[i] = best;
            }
            dp = ndp;
        }
        return dp[n];
    }
}
