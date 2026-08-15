import java.util.*;

class Solution {

    public int minCost(int n, int[] cuts) {
        int[] positions = new int[cuts.length + 2];
        System.arraycopy(cuts, 0, positions, 0, cuts.length);
        positions[cuts.length] = 0;
        positions[cuts.length + 1] = n;
        Arrays.sort(positions);
        int size = positions.length;
        int[][] dp = new int[size][size];
        for (int length = 2; length < size; length++) {
            for (int i = 0; i + length < size; i++) {
                int j = i + length;
                int best = Integer.MAX_VALUE;
                for (int k = i + 1; k < j; k++) {
                    if (dp[i][k] + dp[k][j] < best) best = dp[i][k] + dp[k][j];
                }
                dp[i][j] = best + (positions[j] - positions[i]);
            }
        }
        return dp[0][size - 1];
    }
}
