class NumMatrix {

    private final long[][] prefix;

    public NumMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        this.prefix = new long[rows + 1][cols + 1];
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                prefix[row + 1][col + 1] =
                    matrix[row][col] +
                    prefix[row][col + 1] +
                    prefix[row + 1][col] -
                    prefix[row][col];
            }
        }
    }

    public long sumRegion(int row1, int col1, int row2, int col2) {
        return (
            prefix[row2 + 1][col2 + 1] -
            prefix[row1][col2 + 1] -
            prefix[row2 + 1][col1] +
            prefix[row1][col1]
        );
    }
}
