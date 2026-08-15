import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[] asteroidCollision(int[] asteroids) {
        Deque<Integer> stack = new ArrayDeque<>();
        for (int asteroid : asteroids) {
            boolean alive = true;
            while (
                alive &&
                !stack.isEmpty() &&
                asteroid < 0 &&
                stack.peekLast() > 0
            ) {
                int top = stack.peekLast();
                if (top < -asteroid) {
                    stack.pollLast();
                } else if (top == -asteroid) {
                    stack.pollLast();
                    alive = false;
                } else {
                    alive = false;
                }
            }
            if (alive) {
                stack.addLast(asteroid);
            }
        }
        int[] result = new int[stack.size()];
        int i = 0;
        for (int value : stack) {
            result[i++] = value;
        }
        return result;
    }
}
