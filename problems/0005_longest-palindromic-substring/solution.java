class Solution {

    public String longestPalindrome(String s) {
        int n = s.length();
        int bestStart = 0,
            bestEnd = 0;
        for (int i = 0; i < n; i++) {
            int[][] centers = { expand(s, i, i), expand(s, i, i + 1) };
            for (int[] c : centers) {
                if (c[1] - c[0] > bestEnd - bestStart) {
                    bestStart = c[0];
                    bestEnd = c[1];
                }
            }
        }
        return s.substring(bestStart, bestEnd + 1);
    }

    private int[] expand(String s, int left, int right) {
        while (
            left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)
        ) {
            left--;
            right++;
        }
        return new int[] { left + 1, right - 1 };
    }
}
