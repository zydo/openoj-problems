import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int countSubIslands(int[][] grid1, int[][] grid2) {
        int m = grid2.length,
            n = grid2[0].length;
        boolean[][] seen = new boolean[m][n];
        int count = 0;
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        for (int si = 0; si < m; si++) {
            for (int sj = 0; sj < n; sj++) {
                if (grid2[si][sj] == 1 && !seen[si][sj]) {
                    seen[si][sj] = true;
                    Deque<int[]> stack = new ArrayDeque<>();
                    stack.push(new int[] { si, sj });
                    boolean isSub = true;
                    while (!stack.isEmpty()) {
                        int[] cur = stack.pop();
                        int x = cur[0],
                            y = cur[1];
                        if (grid1[x][y] != 1) isSub = false;
                        for (int[] d : dirs) {
                            int nx = x + d[0],
                                ny = y + d[1];
                            if (
                                nx >= 0 &&
                                nx < m &&
                                ny >= 0 &&
                                ny < n &&
                                grid2[nx][ny] == 1 &&
                                !seen[nx][ny]
                            ) {
                                seen[nx][ny] = true;
                                stack.push(new int[] { nx, ny });
                            }
                        }
                    }
                    if (isSub) count++;
                }
            }
        }
        return count;
    }
}
