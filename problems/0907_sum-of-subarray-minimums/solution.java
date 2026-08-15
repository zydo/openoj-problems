import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int sumSubarrayMins(int[] arr) {
        final int MOD = 1000000007;
        int n = arr.length;
        int[] left = new int[n];
        int[] right = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
                stack.pop();
            }
            left[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(i);
        }
        stack = new ArrayDeque<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
                stack.pop();
            }
            right[i] = stack.isEmpty() ? n : stack.peek();
            stack.push(i);
        }
        long total = 0;
        for (int i = 0; i < n; i++) {
            total += (long) arr[i] * (i - left[i]) * (right[i] - i);
        }
        return (int) (total % MOD);
    }
}
