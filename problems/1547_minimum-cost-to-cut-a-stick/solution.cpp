class Solution {
  public:
    int minCost(int n, vector<int> &cuts) {
        vector<int> positions(cuts);
        positions.push_back(0);
        positions.push_back(n);
        sort(positions.begin(), positions.end());
        int size = (int)positions.size();
        vector<vector<int>> dp(size, vector<int>(size, 0));
        for (int length = 2; length < size; length++) {
            for (int i = 0; i + length < size; i++) {
                int j = i + length;
                int best = INT_MAX;
                for (int k = i + 1; k < j; k++) {
                    if (dp[i][k] + dp[k][j] < best)
                        best = dp[i][k] + dp[k][j];
                }
                dp[i][j] = best + (positions[j] - positions[i]);
            }
        }
        return dp[0][size - 1];
    }
};
