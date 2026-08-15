class Solution {

    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        final int INF = Integer.MAX_VALUE / 2;
        int[][] need = new int[m + 1][n + 1];
        for (int[] row : need) {
            java.util.Arrays.fill(row, INF);
        }
        need[m][n - 1] = 1;
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                int bestNext = Math.min(need[i + 1][j], need[i][j + 1]);
                need[i][j] = Math.max(1, bestNext - dungeon[i][j]);
            }
        }
        return need[0][0];
    }
}
