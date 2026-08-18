class Solution {
  public:
    vector<vector<int>> commonIntervalPieces(vector<vector<int>> &rangesA, vector<vector<int>> &rangesB) {
        vector<vector<int>> result;
        size_t i = 0, j = 0;
        while (i < rangesA.size() && j < rangesB.size()) {
            // The overlap of the two current intervals is [max starts,
            // min ends]; lo <= hi means they intersect (closed intervals,
            // so touching endpoints still count).
            int lo = max(rangesA[i][0], rangesB[j][0]);
            int hi = min(rangesA[i][1], rangesB[j][1]);
            if (lo <= hi) {
                result.push_back({lo, hi});
            }
            // Retire the interval that ends earlier: later intervals in the
            // other list start strictly after its end, so it is done forever.
            if (rangesA[i][1] < rangesB[j][1]) {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
};
