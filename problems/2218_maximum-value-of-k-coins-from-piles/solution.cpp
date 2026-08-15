class Solution {
  public:
    int maxValueOfCoins(vector<vector<int>> &piles, int k) {
        vector<int> dp(k + 1, 0);
        for (auto &pile : piles) {
            vector<int> prefix(1, 0);
            prefix.reserve(pile.size() + 1);
            for (int coin : pile) {
                prefix.push_back(prefix.back() + coin);
            }
            int takeMax = min((int)pile.size(), k);
            vector<int> ndp(k + 1, 0);
            for (int j = 0; j <= k; j++) {
                int value = dp[j];
                int lim = min(takeMax, j);
                for (int t = 1; t <= lim; t++) {
                    int cand = dp[j - t] + prefix[t];
                    if (cand > value)
                        value = cand;
                }
                ndp[j] = value;
            }
            dp = ndp;
        }
        return dp[k];
    }
};
