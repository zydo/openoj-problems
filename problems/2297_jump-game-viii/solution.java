import java.util.*;

class Solution {

    public long minCost(int[] nums, int[] costs) {
        int n = nums.length;
        int[] nextGe = new int[n];
        int[] nextSm = new int[n];
        Arrays.fill(nextGe, -1);
        Arrays.fill(nextSm, -1);
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && nums[i] >= nums[stack.peek()]) {
                nextGe[stack.pop()] = i;
            }
            stack.push(i);
        }
        stack.clear();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && nums[i] < nums[stack.peek()]) {
                nextSm[stack.pop()] = i;
            }
            stack.push(i);
        }
        long inf = (long) 1e18;
        long[] dp = new long[n];
        Arrays.fill(dp, inf);
        dp[0] = 0;
        for (int i = 0; i + 1 < n; i++) {
            for (int j : new int[] { nextGe[i], nextSm[i] }) {
                if (j != -1 && dp[i] + costs[j] < dp[j]) {
                    dp[j] = dp[i] + costs[j];
                }
            }
        }
        return dp[n - 1];
    }
}
