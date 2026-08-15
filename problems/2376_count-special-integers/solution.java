class Solution {

    public int countSpecialNumbers(long n) {
        String s = Long.toString(n);
        int L = s.length();
        long total = 0;
        for (int k = 1; k < L; k++) {
            total += 9L * perm(9, k - 1);
        }
        int used = 0;
        boolean broke = false;
        for (int i = 0; i < L; i++) {
            int d = s.charAt(i) - '0';
            for (int x = i == 0 ? 1 : 0; x < d; x++) {
                if (((used >> x) & 1) == 0) {
                    total += perm(10 - (i + 1), L - i - 1);
                }
            }
            if (((used >> d) & 1) == 1) {
                broke = true;
                break;
            }
            used |= 1 << d;
        }
        if (!broke) {
            total += 1;
        }
        return (int) total;
    }

    private long perm(long a, int k) {
        long p = 1;
        for (int i = 0; i < k; i++) {
            p *= a - i;
        }
        return p;
    }
}
