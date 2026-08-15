class Solution {

    public int maxSideLength(int[][] mat, int threshold) {
        int m = mat.length;
        int n = mat[0].length;
        long[][] prefix = new long[m + 1][n + 1];
        for (int i = 0; i < m; i++) {
            long[] prow = prefix[i];
            long[] crow = prefix[i + 1];
            int[] row = mat[i];
            for (int j = 0; j < n; j++) {
                crow[j + 1] = crow[j] + prow[j + 1] - prow[j] + row[j];
            }
        }

        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                while (
                    i + ans < m &&
                    j + ans < n &&
                    squareSum(prefix, i, j, ans + 1) <= threshold
                ) {
                    ans += 1;
                }
            }
        }
        return ans;
    }

    private long squareSum(long[][] p, int i, int j, int k) {
        return p[i + k][j + k] - p[i][j + k] - p[i + k][j] + p[i][j];
    }
}
