class Solution {

    public int minCostClimbingStairs(int[] cost) {
        int prev2 = 0,
            prev1 = 0;
        for (int c : cost) {
            int cur = c + Math.min(prev1, prev2);
            prev2 = prev1;
            prev1 = cur;
        }
        return Math.min(prev1, prev2);
    }
}
