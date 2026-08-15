class Solution {

    public long sumScores(String s) {
        int n = s.length();
        if (n == 0) return 0;
        int[] z = new int[n];
        z[0] = n;
        int left = 0,
            right = 0;
        for (int i = 1; i < n; i++) {
            if (i < right) {
                z[i] = Math.min(right - i, z[i - left]);
            }
            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i])) {
                z[i] += 1;
            }
            if (i + z[i] > right) {
                left = i;
                right = i + z[i];
            }
        }
        long total = 0;
        for (int v : z) total += v;
        return total;
    }
}
