class Solution {

    public int peopleAwareOfSecret(int n, int delay, int forget) {
        final int MOD = 1000000007;
        long[] know = new long[n + 1];
        know[1] = 1;
        for (int day = 2; day <= n; day++) {
            long total = 0;
            int lo = Math.max(1, day - forget + 1);
            int hi = day - delay;
            for (int d = lo; d <= hi; d++) {
                total += know[d];
            }
            know[day] = total % MOD;
        }
        long answer = 0;
        for (int d = n - forget + 1; d <= n; d++) {
            answer += know[d];
        }
        return (int) (answer % MOD);
    }
}
