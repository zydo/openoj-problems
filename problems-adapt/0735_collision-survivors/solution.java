import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int[] collisionSurvivors(int[] movers) {
        // The stack holds survivors — internally stable, all collisions resolved.
        Deque<Integer> stack = new ArrayDeque<>();
        for (int mover : movers) {
            boolean alive = true;
            // A newcomer can only fight the top, and only when it moves left
            // against a right-moving survivor; other pairs never meet.
            while (alive && !stack.isEmpty() && mover < 0 && stack.peekLast() > 0) {
                int top = stack.peekLast();
                if (top < -mover) {
                    // Top explodes; the newcomer continues against the new top.
                    stack.pollLast();
                } else if (top == -mover) {
                    // Equal sizes: both explode.
                    stack.pollLast();
                    alive = false;
                } else {
                    // Top is larger: the newcomer explodes.
                    alive = false;
                }
            }
            if (alive) {
                stack.addLast(mover);
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
