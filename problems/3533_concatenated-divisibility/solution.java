import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[] concatenatedDivisibility(int[] nums, int k) {
        int n = nums.length;
        int[] lens = new int[n];
        for (int i = 0; i < n; i++) {
            lens[i] = String.valueOf(nums[i]).length();
        }
        int[] pow10 = new int[8];
        pow10[0] = 1;
        for (int i = 1; i < 8; i++) pow10[i] = pow10[i - 1] * 10;

        int full = (1 << n) - 1;
        boolean[][] dp = new boolean[1 << n][k];
        dp[full][0] = true;
        for (int mask = full - 1; mask >= 0; mask--) {
            for (int rem = 0; rem < k; rem++) {
                for (int i = 0; i < n; i++) {
                    if (((mask >> i) & 1) == 0) {
                        int nrem = (int) (((long) rem * pow10[lens[i]] +
                            nums[i]) %
                            k);
                        if (dp[mask | (1 << i)][nrem]) {
                            dp[mask][rem] = true;
                            break;
                        }
                    }
                }
            }
        }

        if (!dp[0][0]) return new int[0];

        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) order[i] = i;
        java.util.Arrays.sort(order, (a, b) ->
            nums[a] != nums[b]
                ? Integer.compare(nums[a], nums[b])
                : Integer.compare(a, b)
        );
        List<Integer> res = new ArrayList<>();
        int mask = 0;
        long rem = 0;
        for (int step = 0; step < n; step++) {
            for (int i : order) {
                if (((mask >> i) & 1) == 0) {
                    long nrem = (rem * pow10[lens[i]] + nums[i]) % k;
                    if (dp[mask | (1 << i)][(int) nrem]) {
                        res.add(nums[i]);
                        mask |= 1 << i;
                        rem = nrem;
                        break;
                    }
                }
            }
        }
        int[] out = new int[res.size()];
        for (int i = 0; i < out.length; i++) out[i] = res.get(i);
        return out;
    }
}
