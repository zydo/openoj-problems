class Solution {
  public:
    bool canPartition(vector<int> &nums) {
        long long total = 0;
        for (int v : nums)
            total += v;
        if (total % 2 != 0)
            return false;
        int target = (int)(total / 2);
        vector<char> dp(target + 1, 0);
        dp[0] = 1;
        for (int v : nums) {
            for (int j = target; j >= v; j--) {
                if (dp[j - v])
                    dp[j] = 1;
            }
            if (dp[target])
                return true;
        }
        return dp[target] != 0;
    }
};
