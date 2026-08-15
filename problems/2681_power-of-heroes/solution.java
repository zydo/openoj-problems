import java.util.Arrays;

class Solution {

    public int sumOfPower(int[] nums) {
        final long MOD = 1000000007L;
        int[] arr = nums.clone();
        Arrays.sort(arr);
        long ans = 0;
        long s = 0;
        for (int x : arr) {
            long lx = x;
            ans = (ans + ((lx * lx) % MOD) * ((s + lx) % MOD)) % MOD;
            s = (2 * s + lx) % MOD;
        }
        return (int) ans;
    }
}
