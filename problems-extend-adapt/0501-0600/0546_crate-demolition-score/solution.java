import java.util.Arrays;

class Solution {

    private int[] crates;
    private int[][][] memo;

    public int demolishCrates(int[] crates) {
        // Memoized interval DP. dfs(l, r, k) is the best score from
        // crates[l..r] when k crates of crates[l]'s color, already removed
        // from outside the interval, sit glued to its left and will join
        // its group.
        int n = crates.length;
        this.crates = crates;
        memo = new int[n][n][n + 1];
        for (int[][] plane : memo) {
            for (int[] row : plane) {
                Arrays.fill(row, -1);
            }
        }
        return dfs(0, n - 1, 0);
    }

    private int dfs(int l, int r, int k) {
        if (l > r) {
            return 0;
        }
        // Adjacent same-colored crates never need separate treatment:
        // holding crates[l] until its identical neighbor leaves only grows
        // the eventual group, so the run joins the carry.
        while (l < r && crates[l + 1] == crates[l]) {
            ++l;
            ++k;
        }
        int cached = memo[l][r][k];
        if (cached != -1) {
            return cached;
        }
        // Either take crates[l] and its carry now, scoring (k+1)^2...
        int best = (k + 1) * (k + 1) + dfs(l + 1, r, 0);
        // ...or hold it: clear crates[l+1..m-1] first, so crates[l] meets
        // the next same-colored crate one richer in the carry.
        for (int m = l + 1; m <= r; ++m) {
            if (crates[m] == crates[l]) {
                best = Math.max(best, dfs(l + 1, m - 1, 0) + dfs(m, r, k + 1));
            }
        }
        memo[l][r][k] = best;
        return best;
    }
}
