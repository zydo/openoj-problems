import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[] largestDivisibleSubset(int[] nums) {
        int[] arr = nums.clone();
        java.util.Arrays.sort(arr);
        int n = arr.length;
        if (n == 0) return new int[0];
        int[] dp = new int[n];
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = 1;
            parent[i] = -1;
        }
        int best = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] % arr[j] == 0 && dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }
            if (dp[i] > dp[best]) best = i;
        }
        List<Integer> result = new ArrayList<>();
        for (int i = best; i != -1; i = parent[i]) result.add(arr[i]);
        int[] out = new int[result.size()];
        for (int k = 0; k < out.length; k++) out[k] = result.get(
            out.length - 1 - k
        );
        return out;
    }
}
