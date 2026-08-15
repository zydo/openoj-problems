class Solution {

    public String encode(String s) {
        int n = s.length();
        String[][] dp = new String[n][n];
        for (int length = 1; length <= n; length++) {
            for (int i = 0; i + length <= n; i++) {
                int j = i + length - 1;
                String substr = s.substring(i, j + 1);
                String best = substr;
                for (int k = i; k < j; k++) {
                    String candidate = dp[i][k] + dp[k + 1][j];
                    if (candidate.length() < best.length()) {
                        best = candidate;
                    }
                }
                String compression = null;
                for (int p = 1; p < length; p++) {
                    if (length % p == 0) {
                        String pattern = s.substring(i, i + p);
                        if (pattern.repeat(length / p).equals(substr)) {
                            String encoded =
                                length / p + "[" + dp[i][i + p - 1] + "]";
                            if (
                                compression == null ||
                                encoded.length() < compression.length()
                            ) {
                                compression = encoded;
                            }
                        }
                    }
                }
                if (compression != null) {
                    if (
                        compression.length() < best.length() ||
                        (compression.length() == best.length() &&
                            !best.equals(substr))
                    ) {
                        best = compression;
                    }
                }
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
}
