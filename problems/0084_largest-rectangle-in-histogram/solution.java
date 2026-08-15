import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int largestRectangleArea(int[] heights) {
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
