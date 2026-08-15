class Solution {
  public:
    int longestSubsequence(vector<int> &arr, int difference) {
        unordered_map<int, int> dp;
        int best = 0;
        for (int x : arr) {
            auto it = dp.find(x - difference);
            int len = (it == dp.end() ? 0 : it->second) + 1;
            dp[x] = len;
            best = max(best, len);
        }
        return best;
    }
};
