class Solution {

    public int findKthNumber(int n, int k) {
        long cur = 1;
        long kk = k - 1;
        while (kk > 0) {
            long steps = countSteps(n, cur, cur + 1);
            if (steps <= kk) {
                cur += 1;
                kk -= steps;
            } else {
                cur *= 10;
                kk -= 1;
            }
        }
        return (int) cur;
    }

    private long countSteps(long n, long n1, long n2) {
        long steps = 0;
        while (n1 <= n) {
            steps += Math.min(n + 1, n2) - n1;
            n1 *= 10;
            n2 *= 10;
        }
        return steps;
    }
}
