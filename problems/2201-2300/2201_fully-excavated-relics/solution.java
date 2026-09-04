class Solution {

    public int excavatedRelics(int n, int[][] relics, int[][] digs) {
        // Mark every excavated cell once in a boolean grid, then each
        // rectangle test is a constant-time lookup per cell — digs is never
        // rescanned for an artifact.
        boolean[][] dug = new boolean[n][n];
        for (int[] cell : digs) {
            dug[cell[0]][cell[1]] = true;
        }
        int extracted = 0;
        for (int[] rect : relics) {
            boolean complete = true;
            for (int r = rect[0]; r <= rect[2] && complete; r++) {
                for (int c = rect[1]; c <= rect[3]; c++) {
                    if (!dug[r][c]) {
                        complete = false;
                        break;
                    }
                }
            }
            if (complete) {
                extracted++;
            }
        }
        return extracted;
    }
}
