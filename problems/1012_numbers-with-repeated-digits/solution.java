class Solution {

    public int numDupDigitsAtMostN(int n) {
        String s = Integer.toString(n);
        int length = s.length();
        int[] digits = new int[length];
        for (int i = 0; i < length; i++) digits[i] = s.charAt(i) - '0';

        long distinct = 0;
        for (int d = 1; d < length; d++) {
            long prod = 9;
            for (int i = 1; i < d; i++) prod *= 10 - i;
            distinct += prod;
        }

        int usedMask = 0;
        boolean repeated = false;
        for (int i = 0; i < length; i++) {
            int digit = digits[i];
            int start = i == 0 ? 1 : 0;
            long smaller = 0;
            for (int cand = start; cand < digit; cand++) {
                if ((usedMask & (1 << cand)) == 0) smaller++;
            }
            int remaining = length - i - 1;
            long perms = 1;
            int avail = 10 - (i + 1);
            for (int r = 0; r < remaining; r++) {
                perms *= avail;
                avail--;
            }
            distinct += smaller * perms;
            if ((usedMask & (1 << digit)) != 0) {
                repeated = true;
                break;
            }
            usedMask |= 1 << digit;
        }
        if (!repeated) distinct += 1;

        return (int) (n - distinct);
    }
}
