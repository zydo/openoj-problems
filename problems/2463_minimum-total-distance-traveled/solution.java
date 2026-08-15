import java.util.Arrays;

class Solution {

    public long minimumTotalDistance(int[] robot, int[][] factory) {
        int[] rob = robot.clone();
        Arrays.sort(rob);
        int[][] fac = factory.clone();
        Arrays.sort(fac, (a, b) ->
            a[0] != b[0]
                ? Integer.compare(a[0], b[0])
                : Integer.compare(a[1], b[1])
        );
        int n = rob.length;
        long INF = Long.MAX_VALUE / 4;
        long[] dp = new long[n + 1];
        Arrays.fill(dp, INF);
        dp[0] = 0;
        for (int[] f : fac) {
            long pos = f[0];
            int limit = f[1];
            long[] pref = new long[n + 1];
            for (int i = 0; i < n; i++) {
                long d = rob[i] - pos;
                pref[i + 1] = pref[i] + (d < 0 ? -d : d);
            }
            long[] ndp = dp.clone();
            for (int i = 1; i <= n; i++) {
                long best = dp[i];
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
