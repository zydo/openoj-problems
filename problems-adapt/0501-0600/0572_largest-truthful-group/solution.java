class Solution {

    public int mostTruthful(int[][] statements) {
        int n = statements.length;
        int best = 0;
        // Enumerate every assignment: bit i set means person i is truthful.
        // The constraint is one-sided — truthful people must tell the truth,
        // unreliable people may say anything.
        for (int mask = 0; mask < 1 << n; mask++) {
            boolean valid = true;
            int count = 0;
            outer: for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) == 0) {
                    continue;
                }
                count++;
                for (int j = 0; j < n; j++) {
                    // 2 = no statement; a "j is truthful" claim requires bit j
                    // set and a "j is unreliable" claim requires it clear.
                    if (statements[i][j] == 2) {
                        continue;
                    }
                    boolean isTruthful = (mask & (1 << j)) != 0;
                    if (isTruthful != (statements[i][j] == 1)) {
                        valid = false;
                        break outer;
                    }
                }
            }
            if (valid) {
                best = Math.max(best, count);
            }
        }
        return best;
    }
}
