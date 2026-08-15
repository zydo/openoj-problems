import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public boolean find132pattern(int[] nums) {
        if (nums.length < 3) {
            return false;
        }
        Deque<Integer> stack = new ArrayDeque<>();
        long third = Long.MIN_VALUE;
        for (int i = nums.length - 1; i >= 0; i--) {
            int value = nums[i];
            if (value < third) {
                return true;
            }
            while (!stack.isEmpty() && stack.peek() < value) {
                third = stack.pop();
            }
            stack.push(value);
        }
        return false;
    }
}
