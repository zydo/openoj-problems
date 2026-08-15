class NumMatrix {

    private final int m;
    private final int n;
    private final int[][] matrix;
    private final long[][] tree;

    public NumMatrix(int[][] matrix) {
        this.m = matrix.length;
        this.n = matrix[0].length;
        this.matrix = new int[m][];
        for (int i = 0; i < m; i++) {
            this.matrix[i] = matrix[i].clone();
        }
        this.tree = new long[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            long[] row = new long[n + 1];
            int[] source = this.matrix[i - 1];
            for (int j = 1; j <= n; j++) {
                row[j] += source[j - 1];
                int parent = j + (j & -j);
                if (parent <= n) {
                    row[parent] += row[j];
                }
            }
            long[] treeRow = tree[i];
            for (int j = 1; j <= n; j++) {
                treeRow[j] += row[j];
            }
            int parentRow = i + (i & -i);
            if (parentRow <= m) {
                long[] target = tree[parentRow];
                for (int j = 1; j <= n; j++) {
                    target[j] += treeRow[j];
                }
            }
        }
    }

    public void update(int row, int col, int val) {
        long delta = (long) val - matrix[row][col];
        matrix[row][col] = val;
        for (int i = row + 1; i <= m; i += i & -i) {
            for (int j = col + 1; j <= n; j += j & -j) {
                tree[i][j] += delta;
            }
        }
    }

    public long sumRegion(int row1, int col1, int row2, int col2) {
        return (
            prefix(row2 + 1, col2 + 1) -
            prefix(row1, col2 + 1) -
            prefix(row2 + 1, col1) +
            prefix(row1, col1)
        );
    }

    private long prefix(int rows, int cols) {
        long total = 0;
        for (int i = rows; i > 0; i -= i & -i) {
            for (int j = cols; j > 0; j -= j & -j) {
                total += tree[i][j];
            }
        }
        return total;
    }
}
