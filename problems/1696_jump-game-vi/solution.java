import java.util.*;

class Solution {

    public long maxResult(int[] nums, int k) {
        int n = nums.length;
        long[] dp = new long[n];
        dp[0] = nums[0];
        Deque<Integer> window = new ArrayDeque<>();
        window.add(0);
        for (int i = 1; i < n; i++) {
            while (window.peekFirst() < i - k) {
                window.pollFirst();
            }
            dp[i] = nums[i] + dp[window.peekFirst()];
            while (!window.isEmpty() && dp[window.peekLast()] <= dp[i]) {
                window.pollLast();
            }
            window.add(i);
        }
        return dp[n - 1];
    }
}
