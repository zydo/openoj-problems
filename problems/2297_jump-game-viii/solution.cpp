class Solution {
  public:
    long long minCost(vector<int> &nums, vector<int> &costs) {
        int n = (int)nums.size();
        vector<int> nextGe(n, -1), nextSm(n, -1);
        vector<int> stack;
        for (int i = 0; i < n; i++) {
            while (!stack.empty() && nums[i] >= nums[stack.back()]) {
                nextGe[stack.back()] = i;
                stack.pop_back();
            }
            stack.push_back(i);
        }
        stack.clear();
        for (int i = 0; i < n; i++) {
            while (!stack.empty() && nums[i] < nums[stack.back()]) {
                nextSm[stack.back()] = i;
                stack.pop_back();
            }
            stack.push_back(i);
        }
        long long inf = (long long)1e18;
        vector<long long> dp(n, inf);
        dp[0] = 0;
        for (int i = 0; i + 1 < n; i++) {
            for (int j : {nextGe[i], nextSm[i]}) {
                if (j != -1 && dp[i] + costs[j] < dp[j]) {
                    dp[j] = dp[i] + costs[j];
                }
            }
        }
        return dp[n - 1];
    }
};
