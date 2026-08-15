class Solution {

    public int countPrimes(int n) {
        if (n < 3) {
            return 0;
        }
        boolean[] isComposite = new boolean[n];
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (!isComposite[i]) {
                count++;
                if ((long) i * i < n) {
                    for (long j = (long) i * i; j < n; j += i) {
                        isComposite[(int) j] = true;
                    }
                }
            }
        }
        return count;
    }
}
