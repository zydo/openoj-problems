import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[] canSeePersonsCount(int[] heights) {
        int n = heights.length;
        int[] answer = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = n - 1; i >= 0; i--) {
            int seen = 0;
            while (!stack.isEmpty() && stack.peek() < heights[i]) {
                stack.pop();
                seen++;
            }
            answer[i] = seen + (stack.isEmpty() ? 0 : 1);
            stack.push(heights[i]);
        }
        return answer;
    }
}
