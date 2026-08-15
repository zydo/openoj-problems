class Solution {
  public:
    string stoneGameIII(vector<int> &stoneValue) {
        int n = stoneValue.size();
        vector<long long> dp(n + 1, 0);
        for (int i = n - 1; i >= 0; i--) {
            long long take = 0;
            long long best = LLONG_MIN;
            int hi = min(i + 3, n);
            for (int j = i; j < hi; j++) {
                take += stoneValue[j];
                long long cand = take - dp[j + 1];
                best = max(best, cand);
            }
            dp[i] = best;
        }
        if (dp[0] > 0) {
            return "Alice";
        }
        if (dp[0] < 0) {
            return "Bob";
        }
        return "Tie";
    }
};
