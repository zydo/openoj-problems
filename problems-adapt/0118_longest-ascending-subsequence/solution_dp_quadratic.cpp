class Solution {
  public:
    int longestAscendingLength(vector<int> &nums) {
        int n = (int)nums.size();
        // dp[i] = length of the longest ascending subsequence ending
        // exactly at i; the global answer is the max over all endings.
        vector<int> dp(n, 1);
        int answer = 1;
        for (int i = 0; i < n; i++) {
            // Every earlier smaller element can precede nums[i], so extend
            // the best of those chains by one.
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                }
            }
            answer = max(answer, dp[i]);
        }
        return answer;
    }
};
