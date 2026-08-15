class Solution {
  public:
    long long maxResult(vector<int> &nums, int k) {
        int n = (int)nums.size();
        vector<long long> dp(n);
        dp[0] = nums[0];
        deque<int> window{0};
        for (int i = 1; i < n; i++) {
            while (window.front() < i - k) {
                window.pop_front();
            }
            dp[i] = nums[i] + dp[window.front()];
            while (!window.empty() && dp[window.back()] <= dp[i]) {
                window.pop_back();
            }
            window.push_back(i);
        }
        return dp[n - 1];
    }
};
