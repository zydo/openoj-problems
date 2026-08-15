import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {

    public int countPaths(int[][] grid) {
        final int MOD = 1000000007;
        int m = grid.length,
            n = grid[0].length;
        List<int[]> cells = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) cells.add(new int[] {
                grid[i][j],
                i,
                j,
            });
        }
        Collections.sort(cells, (x, y) -> Integer.compare(y[0], x[0]));
        long[][] dp = new long[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) dp[i][j] = 1;
        }
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        for (int[] cell : cells) {
            int v = cell[0],
                i = cell[1],
                j = cell[2];
            for (int[] dir : dirs) {
                int ni = i + dir[0],
                    nj = j + dir[1];
                if (
                    ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] > v
                ) {
                    dp[i][j] = (dp[i][j] + dp[ni][nj]) % MOD;
                }
            }
        }
        long total = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) total = (total + dp[i][j]) % MOD;
        }
        return (int) total;
    }
}
