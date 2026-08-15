import java.util.ArrayList;
import java.util.List;

class Solution {

    public int numberWays(int[][] hats) {
        final int MOD = 1000000007;
        int n = hats.length;
        int full = (1 << n) - 1;
        List<List<Integer>> h2p = new ArrayList<>();
        for (int h = 0; h <= 40; h++) {
            h2p.add(new ArrayList<>());
        }
        for (int p = 0; p < n; p++) {
            for (int h : hats[p]) {
                h2p.get(h).add(p);
            }
        }
        long[] dp = new long[full + 1];
        dp[0] = 1;
        for (int h = 1; h <= 40; h++) {
            List<Integer> people = h2p.get(h);
            if (people.isEmpty()) {
                continue;
            }
            long[] ndp = dp.clone();
            for (int mask = 0; mask <= full; mask++) {
                long v = dp[mask];
                if (v == 0) {
                    continue;
                }
                for (int p : people) {
                    int bit = 1 << p;
                    if ((mask & bit) == 0) {
                        int nm = mask | bit;
                        ndp[nm] = (ndp[nm] + v) % MOD;
                    }
                }
            }
            dp = ndp;
        }
        return (int) dp[full];
    }
}
