class Solution {
  public:
    int findLength(vector<int> &nums1, vector<int> &nums2) {
        int m = nums1.size(), n = nums2.size();
        vector<int> dp(n + 1, 0);
        int best = 0;
        for (int i = m - 1; i >= 0; i--) {
            vector<int> cur(n + 1, 0);
            for (int j = n - 1; j >= 0; j--) {
                if (nums1[i] == nums2[j]) {
                    cur[j] = dp[j + 1] + 1;
                    if (cur[j] > best)
                        best = cur[j];
                }
            }
            dp = move(cur);
        }
        return best;
    }
};
