import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int day = 0; day < n; day++) {
            int temp = temperatures[day];
            while (!stack.isEmpty() && temperatures[stack.peekLast()] < temp) {
                int previous = stack.pollLast();
                answer[previous] = day - previous;
            }
            stack.addLast(day);
        }
        return answer;
    }
}
