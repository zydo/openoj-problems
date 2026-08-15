class Solution {
  public:
    int maxHeight(vector<vector<int>> &cuboids) {
        vector<vector<int>> boxes = cuboids;
        for (auto &b : boxes) {
            sort(b.begin(), b.end());
        }
        sort(boxes.begin(), boxes.end());
        int n = boxes.size();
        vector<int> dp(n);
        int best = 0;
        for (int i = 0; i < n; i++) {
            dp[i] = boxes[i][2];
            for (int j = 0; j < i; j++) {
                if (boxes[j][0] <= boxes[i][0] && boxes[j][1] <= boxes[i][1] &&
                    boxes[j][2] <= boxes[i][2]) {
                    dp[i] = max(dp[i], dp[j] + boxes[i][2]);
                }
            }
            best = max(best, dp[i]);
        }
        return best;
    }
};
