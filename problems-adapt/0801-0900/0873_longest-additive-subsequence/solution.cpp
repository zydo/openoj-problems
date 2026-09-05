class Solution {
  public:
    int longestAdditiveSubseq(vector<int> &nums) {
        int n = nums.size();
        unordered_map<int, int> indexOf;
        for (int i = 0; i < n; i++) {
            indexOf[nums[i]] = i;
        }
        // dp[j][i] = longest additive subsequence ending with nums[j], nums[i]
        vector<vector<int>> dp(n, vector<int>(n, 2));
        int best = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int need = nums[i] - nums[j];
                if (need < nums[j] && indexOf.count(need)) {
                    int k = indexOf[need];
                    dp[j][i] = dp[k][j] + 1;
                    best = max(best, dp[j][i]);
                }
            }
        }
        return best >= 3 ? best : 0;
    }
};
