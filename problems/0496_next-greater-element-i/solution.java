import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

class Solution {

    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> nextGreater = new HashMap<>();
        Deque<Integer> stack = new ArrayDeque<>();
        for (int value : nums2) {
            while (!stack.isEmpty() && stack.peek() < value) {
                nextGreater.put(stack.pop(), value);
            }
            stack.push(value);
        }
        for (int value : stack) {
            nextGreater.put(value, -1);
        }
        int[] result = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            result[i] = nextGreater.get(nums1[i]);
        }
        return result;
    }
}
