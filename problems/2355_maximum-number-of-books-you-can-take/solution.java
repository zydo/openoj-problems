class Solution {

    public long maximumBooks(int[] books) {
        int n = books.length;
        long[] dp = new long[n];
        int[] stack = new int[n];
        int top = -1;
        long best = 0;
        for (int i = 0; i < n; i++) {
            long bi = books[i];
            while (top >= 0 && books[stack[top]] >= bi - (i - stack[top])) {
                top--;
            }
            int j = top >= 0 ? stack[top] : -1;
            long length;
            if (j >= 0) {
                length = i - j;
            } else {
                length = Math.min(i, bi) + 1; // stop where the sequence would go negative
            }
            long s = length * bi - (length * (length - 1)) / 2;
            dp[i] = s + (j >= 0 ? dp[j] : 0);
            if (dp[i] > best) {
                best = dp[i];
            }
            stack[++top] = i;
        }
        return best;
    }
}
