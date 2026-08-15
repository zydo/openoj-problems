import java.util.Arrays;

class Solution {

    public int cherryPickup(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        final int NEG = Integer.MIN_VALUE / 2;
        int[][] dp = new int[cols][cols];
        for (int[] row : dp) {
            Arrays.fill(row, NEG);
        }
        dp[0][cols - 1] = grid[0][0] + (cols > 1 ? grid[0][cols - 1] : 0);
        for (int r = 1; r < rows; r++) {
            int[][] ndp = new int[cols][cols];
            for (int[] row : ndp) {
                Arrays.fill(row, NEG);
            }
            for (int c1 = 0; c1 < cols; c1++) {
                for (int c2 = 0; c2 < cols; c2++) {
                    int best = NEG;
                    for (int d1 = -1; d1 <= 1; d1++) {
                        for (int d2 = -1; d2 <= 1; d2++) {
                            int p1 = c1 + d1;
                            int p2 = c2 + d2;
                            if (
                                p1 >= 0 &&
                                p1 < cols &&
                                p2 >= 0 &&
                                p2 < cols &&
                                dp[p1][p2] > best
                            ) {
                                best = dp[p1][p2];
                            }
                        }
                    }
                    if (best > NEG) {
                        ndp[c1][c2] =
                            best + grid[r][c1] + (c1 != c2 ? grid[r][c2] : 0);
                    }
                }
            }
            dp = ndp;
        }
        int ans = NEG;
        for (int c1 = 0; c1 < cols; c1++) {
            for (int c2 = 0; c2 < cols; c2++) {
                if (dp[c1][c2] > ans) {
                    ans = dp[c1][c2];
                }
            }
        }
        return ans;
    }
}
