import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

class Solution {

    private static final int INF = Integer.MAX_VALUE / 2; // above every reachable time (including 1e9 waits)
    private static final int[] DI = { 1, -1, 0, 0 };
    private static final int[] DJ = { 0, 0, 1, -1 };

    public int maximumMinutes(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int[][] fire = new int[m][n];
        for (int[] row : fire) {
            Arrays.fill(row, INF);
        }
        Deque<int[]> queue = new ArrayDeque<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    fire[i][j] = 0;
                    queue.add(new int[] { i, j });
                }
            }
        }
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int i = cur[0],
                j = cur[1];
            for (int d = 0; d < 4; d++) {
                int ni = i + DI[d];
                int nj = j + DJ[d];
                if (
                    ni >= 0 &&
                    ni < m &&
                    nj >= 0 &&
                    nj < n &&
                    grid[ni][nj] != 2 &&
                    fire[ni][nj] == INF
                ) {
                    fire[ni][nj] = fire[i][j] + 1;
                    queue.add(new int[] { ni, nj });
                }
            }
        }

        if (!canReach(grid, fire, 0)) {
            return -1;
        }
        if (canReach(grid, fire, 1_000_000_000)) {
            return 1_000_000_000;
        }

        int lo = 0,
            hi = 1_000_000_000;
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (canReach(grid, fire, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean canReach(int[][] grid, int[][] fire, int wait) {
        int m = grid.length;
        int n = grid[0].length;
        if (wait >= fire[0][0]) {
            return false;
        }
        boolean[][] seen = new boolean[m][n];
        seen[0][0] = true;
        Deque<int[]> dq = new ArrayDeque<>();
        dq.add(new int[] { 0, 0, wait });
        while (!dq.isEmpty()) {
            int[] cur = dq.poll();
            int i = cur[0],
                j = cur[1],
                t = cur[2];
            if (i == m - 1 && j == n - 1) {
                return true;
            }
            for (int d = 0; d < 4; d++) {
                int ni = i + DI[d];
                int nj = j + DJ[d];
                if (
                    ni >= 0 &&
                    ni < m &&
                    nj >= 0 &&
                    nj < n &&
                    grid[ni][nj] != 2 &&
                    !seen[ni][nj]
                ) {
                    int nt = t + 1;
                    if (ni == m - 1 && nj == n - 1) {
                        if (nt <= fire[ni][nj]) {
                            seen[ni][nj] = true;
                            dq.add(new int[] { ni, nj, nt });
                        }
                    } else {
                        if (nt < fire[ni][nj]) {
                            seen[ni][nj] = true;
                            dq.add(new int[] { ni, nj, nt });
                        }
                    }
                }
            }
        }
        return false;
    }
}
