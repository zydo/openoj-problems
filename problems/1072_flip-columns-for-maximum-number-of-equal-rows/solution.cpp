class Solution {
  public:
    int maxEqualRowsAfterFlips(vector<vector<int>> &matrix) {
        unordered_map<string, int> counts;
        int best = 0;
        for (const auto &row : matrix) {
            string key;
            key.reserve(row.size());
            for (int value : row) {
                key.push_back('0' + (char)(value ^ row[0]));
            }
            best = max(best, ++counts[key]);
        }
        return best;
    }
};
