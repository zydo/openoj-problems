import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[] stepsUntilHigher(int[] readings) {
        int n = readings.length;
        int[] answer = new int[n];
        // Stack of positions still waiting for a higher one; their readings
        // are non-increasing bottom to top. Unanswered positions keep answer 0.
        Deque<Integer> stack = new ArrayDeque<>();
        for (int index = 0; index < n; index++) {
            int reading = readings[index];
            // Strictly higher the current reading resolves each waiting index on top; equal
            // readings leave them waiting (strict < comparison).
            while (!stack.isEmpty() && readings[stack.peekLast()] < reading) {
                int previous = stack.pollLast();
                answer[previous] = index - previous;
            }
            stack.addLast(index);
        }
        return answer;
    }
}
