class Solution {

    public long countSubstrings(String s) {
        int n = s.length();
        int[] digits = new int[n];
        for (int i = 0; i < n; i++) digits[i] = s.charAt(i) - '0';
        long total = 0;
        for (int d = 1; d < 10; d++) {
            long[] cnt = new long[d];
            for (int di : digits) {
                if (di == d) {
                    for (int r = 0; r < d; r++) {
                        if ((r * 10) % d == 0) {
                            total += cnt[r];
                        }
                    }
                    total += 1;
                }
                long[] newCnt = new long[d];
                for (int r = 0; r < d; r++) {
                    if (cnt[r] != 0) {
                        newCnt[(r * 10 + di) % d] += cnt[r];
                    }
                }
                newCnt[di % d] += 1;
                cnt = newCnt;
            }
        }
        return total;
    }
}
