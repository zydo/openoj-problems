class Solution {

    public int countSquares(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int total = 0;
        int[] prev = new int[n];
        int[] cur = new int[n];
        for (int i = 0; i < m; i++) {
            java.util.Arrays.fill(cur, 0);
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 0) continue;
                if (i == 0 || j == 0) {
                    cur[j] = 1;
                } else {
                    cur[j] =
                        Math.min(prev[j], Math.min(cur[j - 1], prev[j - 1])) +
                        1;
                }
                total += cur[j];
            }
            int[] tmp = prev;
            prev = cur;
            cur = tmp;
        }
        return total;
    }
}
