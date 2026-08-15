import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public double[] getCollisionTimes(int[][] cars) {
        int n = cars.length;
        double[] answer = new double[n];
        java.util.Arrays.fill(answer, -1.0);
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = n - 1; i >= 0; i--) {
            int position = cars[i][0],
                speed = cars[i][1];
            while (!stack.isEmpty() && speed <= cars[stack.peek()][1]) {
                stack.pop();
            }
            while (!stack.isEmpty()) {
                int j = stack.peek();
                double t =
                    (double) (cars[j][0] - position) / (speed - cars[j][1]);
                if (answer[j] > 0 && t >= answer[j]) {
                    stack.pop();
                } else {
                    answer[i] = t;
                    break;
                }
            }
            stack.push(i);
        }
        return answer;
    }
}
