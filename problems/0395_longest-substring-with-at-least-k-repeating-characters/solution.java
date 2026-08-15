class Solution {

    public int longestSubstring(String s, int k) {
        return longest(s, 0, s.length(), k);
    }

    private int longest(String s, int lo, int hi, int k) {
        if (lo >= hi) return 0;
        int[] counts = new int[128];
        for (int i = lo; i < hi; i++) {
            counts[s.charAt(i)]++;
        }
        boolean allFrequent = true;
        for (int c = 0; c < 128; c++) {
            if (counts[c] > 0 && counts[c] < k) {
                allFrequent = false;
                break;
            }
        }
        if (allFrequent) return hi - lo;
        int best = 0;
        int start = lo;
        for (int i = lo; i < hi; i++) {
            if (counts[s.charAt(i)] < k) {
                best = Math.max(best, longest(s, start, i, k));
                start = i + 1;
            }
        }
        best = Math.max(best, longest(s, start, hi, k));
        return best;
    }
}
