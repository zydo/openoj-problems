import java.util.Arrays;

class Solution {

    public int minimumTotal(int[][] triangle) {
        int n = triangle.length;
        int[] dp = Arrays.copyOf(triangle[n - 1], n);
        for (int row = n - 2; row >= 0; row--) {
            for (int i = 0; i < triangle[row].length; i++) {
                dp[i] = triangle[row][i] + Math.min(dp[i], dp[i + 1]);
            }
        }
        return dp[0];
    }
}
