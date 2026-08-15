import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int maximalRectangle(String[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) return 0;
        int rows = matrix.length,
            cols = matrix[0].length;
        int[] heights = new int[cols];
        int best = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                heights[c] = matrix[r][c].equals("1") ? heights[c] + 1 : 0;
            }
            int area = largestArea(heights);
            if (area > best) best = area;
        }
        return best;
    }

    private int largestArea(int[] heights) {
        int n = heights.length;
        Deque<Integer> stack = new ArrayDeque<>();
        int best = 0;
        for (int i = 0; i <= n; i++) {
            int h = i == n ? 0 : heights[i];
            while (!stack.isEmpty() && heights[stack.peek()] > h) {
                int height = heights[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int area = height * (i - left - 1);
                if (area > best) best = area;
            }
            stack.push(i);
        }
        return best;
    }
}
