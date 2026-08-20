import java.util.ArrayList;
import java.util.List;

class Solution {

    public int countLockerAssignments(int[][] lockers) {
        final int MOD = 1000000007;
        int n = lockers.length;
        int full = (1 << n) - 1;
        List<List<Integer>> h2p = new ArrayList<>();
        for (int h = 0; h <= 40; h++) {
            h2p.add(new ArrayList<>());
        }
        for (int p = 0; p < n; p++) {
            for (int h : lockers[p]) {
                h2p.get(h).add(p);
            }
        }
        // dp[mask]: ways to give a locker to exactly the people in mask using lockers so far
        // (<=10 people -> 1024 states; lockers fold into the loop dimension)
        long[] dp = new long[full + 1];
        dp[0] = 1;
        for (int h = 1; h <= 40; h++) {
            List<Integer> people = h2p.get(h);
            if (people.isEmpty()) {
                continue;
            }
            // copy encodes leaving this locker unused; updating into the copy
            // (reading old dp) also ensures no locker is taken by two people
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
        // full mask: every person gets a locker; unused lockers cost nothing
        return (int) dp[full];
    }
}
