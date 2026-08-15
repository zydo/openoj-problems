class Solution {
  public:
    bool predictTheWinner(vector<int> &nums) {
        int n = nums.size();
        vector<long long> dp(nums.begin(), nums.end());
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                dp[i] = max((long long)nums[i] - dp[i + 1], (long long)nums[j] - dp[i]);
            }
        }
        return dp[0] >= 0;
    }
};
