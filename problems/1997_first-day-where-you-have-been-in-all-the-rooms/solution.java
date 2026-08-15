import java.util.Arrays;

class Solution {

    public int firstDayBeenInAllRooms(int[] nextVisit) {
        final long MOD = 1_000_000_007L;
        int n = nextVisit.length;
        long[] f = new long[n];
        for (int i = 1; i < n; i++) {
            f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2) % MOD;
            if (f[i] < 0) {
                f[i] += MOD;
            }
        }
        return (int) f[n - 1];
    }
}
