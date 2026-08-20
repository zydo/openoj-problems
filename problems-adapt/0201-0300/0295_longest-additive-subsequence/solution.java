import java.util.*;

class Solution {

    public int longestAdditiveSubseq(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> indexOf = new HashMap<>();
        for (int i = 0; i < n; i++) {
            indexOf.put(nums[i], i);
        }
        // dp[j][i] = longest additive subsequence ending with nums[j], nums[i]
        int[][] dp = new int[n][n];
        for (int[] row : dp) {
            Arrays.fill(row, 2);
        }
        int best = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int need = nums[i] - nums[j];
                if (need < nums[j] && indexOf.containsKey(need)) {
                    int k = indexOf.get(need);
                    dp[j][i] = dp[k][j] + 1;
                    if (dp[j][i] > best) {
                        best = dp[j][i];
                    }
                }
            }
        }
        return best >= 3 ? best : 0;
    }
}
