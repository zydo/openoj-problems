import java.util.Arrays;

class Solution {

    public int largestSubmatrix(int[][] matrix) {
        int m = matrix.length;
        if (m == 0) return 0;
        int n = matrix[0].length;
        int[] heights = new int[n];
        int best = 0;
        for (int[] row : matrix) {
            for (int j = 0; j < n; j++) {
                heights[j] = row[j] == 1 ? heights[j] + 1 : 0;
            }
            int[] ordered = heights.clone();
            Arrays.sort(ordered);
            for (int i = n - 1; i >= 0; i--) {
                int h = ordered[i];
                if (h == 0) break;
                int area = h * (n - i);
                if (area > best) best = area;
            }
        }
        return best;
    }
}
