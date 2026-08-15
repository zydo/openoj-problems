class Solution {

    public int uniquePaths(int m, int n) {
        int[] row = new int[n];
        java.util.Arrays.fill(row, 1);
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                row[j] += row[j - 1];
            }
        }
        return row[n - 1];
    }
}
