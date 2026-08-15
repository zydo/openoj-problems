class Solution {

    public int minCut(String s) {
        int n = s.length();
        char[] cs = s.toCharArray();
        int[] cut = new int[n + 1];
        for (int i = 0; i <= n; ++i) {
            cut[i] = i - 1;
        }
        for (int c = 0; c < n; ++c) {
            for (
                int l = c, r = c;
                l >= 0 && r < n && cs[l] == cs[r];
                --l, ++r
            ) {
                cut[r + 1] = Math.min(cut[r + 1], cut[l] + 1);
            }
            for (
                int l = c, r = c + 1;
                l >= 0 && r < n && cs[l] == cs[r];
                --l, ++r
            ) {
                cut[r + 1] = Math.min(cut[r + 1], cut[l] + 1);
            }
        }
        return cut[n];
    }
}
