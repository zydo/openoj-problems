import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

class Solution {

    public int[] nextGreaterForQueries(int[] queries, int[] nums) {
        // One scan of nums answers every query: the stack holds values
        // still waiting for their next greater element.
        Map<Integer, Integer> nextGreater = new HashMap<>();
        Deque<Integer> stack = new ArrayDeque<>();
        for (int value : nums) {
            // The current value is the FIRST greater value to the right of
            // each popped element (anything closer would have popped them
            // already); each element is pushed once, popped at most once.
            while (!stack.isEmpty() && stack.peek() < value) {
                nextGreater.put(stack.pop(), value);
            }
            stack.push(value);
        }
        // Whatever survives on the stack has nothing greater to its right.
        for (int value : stack) {
            nextGreater.put(value, -1);
        }
        // Values are unique and queries is a subset of nums, so every
        // lookup hits.
        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            result[i] = nextGreater.get(queries[i]);
        }
        return result;
    }
}
