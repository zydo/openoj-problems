import java.util.ArrayList;
import java.util.List;

class Solution {

    public int minNumberOfSemesters(int n, int[][] relations, int k) {
        // prereq[i] = bitmask of courses that must precede course i.
        int[] prereq = new int[n];
        for (int[] relation : relations) {
            prereq[relation[1] - 1] |= 1 << (relation[0] - 1);
        }
        int full = (1 << n) - 1;
        final int unreachable = n + 1;
        int[] dp = new int[full + 1];
        java.util.Arrays.fill(dp, unreachable);
        dp[0] = 0;
        List<Integer> bits = new ArrayList<>();
        for (int mask = 0; mask < full; mask++) {
            if (dp[mask] == unreachable) {
                continue;
            }
            int avail = 0;
            for (int course = 0; course < n; course++) {
                if (
                    ((mask >> course) & 1) == 0 && (prereq[course] & ~mask) == 0
                ) {
                    avail |= 1 << course;
                }
            }
            if (avail == 0) {
                continue;
            }
            bits.clear();
            for (int course = 0; course < n; course++) {
                if (((avail >> course) & 1) == 1) {
                    bits.add(course);
                }
            }
            if (bits.size() <= k) {
                relax(mask | avail, dp[mask] + 1, dp);
            } else {
                // Taking an extra available course never hurts, so only
                // semesters that take exactly k courses need examining.
                choose(bits, 0, k, mask, dp[mask], dp);
            }
        }
        return dp[full];
    }

    private static void relax(int state, int candidate, int[] dp) {
        if (candidate < dp[state]) {
            dp[state] = candidate;
        }
    }

    // Enumerate every exactly-need-sized subset of bits[start..] by recursion.
    private static void choose(
        List<Integer> bits,
        int start,
        int need,
        int taken,
        int steps,
        int[] dp
    ) {
        if (need == 0) {
            relax(taken, steps + 1, dp);
            return;
        }
        for (int i = start; i + need <= bits.size(); i++) {
            choose(
                bits,
                i + 1,
                need - 1,
                taken | (1 << bits.get(i)),
                steps,
                dp
            );
        }
    }
}
