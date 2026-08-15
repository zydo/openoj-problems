class Solution {
  public:
    int findTargetSumWays(vector<int> &nums, int target) {
        unordered_map<int, long long> dp;
        dp[0] = 1;
        for (int value : nums) {
            unordered_map<int, long long> nxt;
            for (auto &[total, count] : dp) {
                nxt[total + value] += count;
                nxt[total - value] += count;
            }
            dp = move(nxt);
        }
        return (int)dp.count(target) ? (int)dp[target] : 0;
    }
};
