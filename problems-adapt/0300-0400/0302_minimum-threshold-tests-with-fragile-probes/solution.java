class Solution {

    public int minimumFragileProbeTests(int probeCount, int levelCount) {
        // dp[e]: floors resolvable with `moves` moves and e eggs; grow the
        // move count until probeCount eggs cover all levelCount floors.
        long[] dp = new long[probeCount + 1];
        int moves = 0;
        while (dp[probeCount] < levelCount) {
            moves++;
            // One drop settles its own floor plus the below-case (e - 1 eggs)
            // and the above-case (e eggs), each with one move fewer. Sweeping
            // e downward keeps dp[e - 1] at the previous move's value — the
            // in-place 0/1 knapsack trick.
            for (int e = probeCount; e >= 1; e--) {
                dp[e] = dp[e - 1] + dp[e] + 1;
            }
        }
        return moves;
    }
}
