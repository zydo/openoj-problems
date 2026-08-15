class Solution {
  public:
    int findLongestChain(vector<vector<int>> &pairs) {
        sort(pairs.begin(), pairs.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[1] < b[1]; });
        int length = 0;
        long long currentEnd = LLONG_MIN;
        for (const auto &pair : pairs) {
            if (pair[0] > currentEnd) {
                ++length;
                currentEnd = pair[1];
            }
        }
        return length;
    }
};
