class Solution {
  public:
    int longestSharedRun(vector<int> &first, vector<int> &second) {
        int m = first.size(), n = second.size();
        // dp[j] = longest common run starting exactly at first[i+1], second[j];
        // sweeping i downward keeps row i+1 available when row i is computed.
        vector<int> dp(n + 1, 0);
        int best = 0;
        for (int i = m - 1; i >= 0; i--) {
            vector<int> cur(n + 1, 0);
            for (int j = n - 1; j >= 0; j--) {
                if (first[i] == second[j]) {
                    // Match extends the run starting at (i+1, j+1); a mismatch
                    // leaves 0 — no shared subarray starts there.
                    cur[j] = dp[j + 1] + 1;
                    if (cur[j] > best)
                        best = cur[j];
                }
            }
            // Roll: only the previous row is ever read.
            dp = move(cur);
        }
        return best;
    }
};
