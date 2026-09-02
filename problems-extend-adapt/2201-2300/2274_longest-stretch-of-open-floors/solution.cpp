class Solution {
  public:
    int longestOpenStretch(int bottom, int top, vector<int> &blocked) {
        sort(blocked.begin(), blocked.end());
        int best = max(blocked.front() - bottom, top - blocked.back());
        for (size_t i = 1; i < blocked.size(); i++) {
            best = max(best, blocked[i] - blocked[i - 1] - 1);
        }
        return best;
    }
};
