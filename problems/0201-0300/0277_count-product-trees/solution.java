import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {

    public int countProductTrees(int[] values) {
        final long MOD = 1000000007L;
        Arrays.sort(values);
        Map<Integer, Integer> index = new HashMap<>();
        for (int i = 0; i < values.length; i++) {
            index.put(values[i], i);
        }
        long[] dp = new long[values.length]; // dp[i] = trees rooted at values[i]
        Arrays.fill(dp, 1L);
        for (int i = 0; i < values.length; i++) {
            int v = values[i];
            long total = 1;
            for (int j = 0; j < i; j++) {
                if (v % values[j] == 0) {
                    Integer otherIdx = index.get(v / values[j]);
                    if (otherIdx != null) {
                        total += dp[j] * dp[otherIdx];
                    }
                }
            }
            dp[i] = total % MOD;
        }
        long sum = 0;
        for (long value : dp) {
            sum += value;
        }
        return (int) (sum % MOD);
    }
}
