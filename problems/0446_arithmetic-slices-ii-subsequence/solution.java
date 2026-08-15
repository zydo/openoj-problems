import java.util.HashMap;
import java.util.Map;

class Solution {

    public int numberOfArithmeticSlices(int[] nums) {
        int n = nums.length;
        Map<Long, Long>[] dp = new HashMap[n];
        for (int i = 0; i < n; i++) {
            dp[i] = new HashMap<>();
        }
        long total = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                long d = (long) nums[i] - (long) nums[j];
                long cnt = dp[j].getOrDefault(d, 0L);
                total += cnt;
                dp[i].merge(d, cnt + 1, Long::sum);
            }
        }
        return (int) total;
    }
}
