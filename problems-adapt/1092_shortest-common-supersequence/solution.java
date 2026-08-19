import java.util.*;

class Solution {

    public String shortestCommonSupersequence(String s, String t) {
        int n = s.length();
        int m = t.length();
        // dp[i][j] = length of the LCS of s[i:] and t[j:].
        int[][] dp = new int[n + 1][m + 1];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = m - 1; j >= 0; j--) {
                if (s.charAt(i) == t.charAt(j)) {
                    dp[i][j] = dp[i + 1][j + 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        int i = 0;
        int j = 0;
        while (i < n && j < m) {
            if (s.charAt(i) == t.charAt(j)) {
                sb.append(s.charAt(i));
                i += 1;
                j += 1;
            } else if (dp[i + 1][j] >= dp[i][j + 1]) {
                sb.append(s.charAt(i));
                i += 1;
            } else {
                sb.append(t.charAt(j));
                j += 1;
            }
        }
        sb.append(s, i, n);
        sb.append(t, j, m);
        return sb.toString();
    }
}
