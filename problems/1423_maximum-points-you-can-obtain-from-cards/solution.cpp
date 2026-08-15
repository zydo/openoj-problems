class Solution {
  public:
    int maxScore(vector<int> &cardPoints, int k) {
        int n = cardPoints.size();
        long long total = 0;
        for (int value : cardPoints) {
            total += value;
        }
        int window = n - k;
        long long current = 0;
        for (int i = 0; i < window; i++) {
            current += cardPoints[i];
        }
        long long best = current;
        for (int i = window; i < n; i++) {
            current += cardPoints[i] - cardPoints[i - window];
            if (current < best) {
                best = current;
            }
        }
        return static_cast<int>(total - best);
    }
};
