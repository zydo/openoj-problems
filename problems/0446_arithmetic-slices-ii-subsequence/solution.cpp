class Solution {
  public:
    int numberOfArithmeticSlices(vector<int> &nums) {
        int n = (int)nums.size();
        vector<unordered_map<long long, long long>> dp(n);
        long long total = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                long long d = (long long)nums[i] - (long long)nums[j];
                long long cnt = 0;
                auto it = dp[j].find(d);
                if (it != dp[j].end()) {
                    cnt = it->second;
                }
                total += cnt;
                dp[i][d] += cnt + 1;
            }
        }
        return (int)total;
    }
};
