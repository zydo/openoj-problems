class Solution {

    public long getMaxFunctionValue(int[] receiver, long k) {
        int n = receiver.length;
        int log = 64 - Long.numberOfLeadingZeros(k); // bit length of k
        long[][] up = new long[log][n];
        long[][] sm = new long[log][n];
        for (int x = 0; x < n; x++) {
            up[0][x] = receiver[x];
            sm[0][x] = receiver[x];
        }
        for (int j = 1; j < log; j++) {
            for (int x = 0; x < n; x++) {
                int mid = (int) up[j - 1][x];
                up[j][x] = up[j - 1][mid];
                sm[j][x] = sm[j - 1][x] + sm[j - 1][mid];
            }
        }
        long best = 0;
        for (int x = 0; x < n; x++) {
            long total = x;
            int cur = x;
            long remaining = k;
            int bit = 0;
            while (remaining > 0) {
                if ((remaining & 1) == 1) {
                    total += sm[bit][cur];
                    cur = (int) up[bit][cur];
                }
                remaining >>= 1;
                bit += 1;
            }
            if (total > best) {
                best = total;
            }
        }
        return best;
    }
}
