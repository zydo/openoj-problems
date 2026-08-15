class Solution {
  public:
    int minHeightShelves(vector<vector<int>> &books, int shelfWidth) {
        int count = books.size();
        vector<long long> dp(count + 1, 0);
        for (int i = 1; i <= count; i++) {
            long long width = 0;
            int height = 0;
            dp[i] = LLONG_MAX;
            for (int j = i - 1; j >= 0; j--) {
                width += books[j][0];
                if (width > shelfWidth) {
                    break;
                }
                height = max(height, books[j][1]);
                dp[i] = min(dp[i], dp[j] + height);
            }
        }
        return (int)dp[count];
    }
};
