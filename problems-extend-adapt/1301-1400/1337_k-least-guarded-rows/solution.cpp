class Solution {
  public:
    vector<int> kLeastGuardedRows(vector<vector<int>> &mat, int k) {
        // Weakness order == lexicographic order of (guards, index); rows
        // are all 1's then 0's, so the sum is the first-unmanned index too.
        vector<pair<int, int>> ranked;
        ranked.reserve(mat.size());
        for (int i = 0; i < (int)mat.size(); ++i) {
            int guards = 0;
            for (int value : mat[i]) {
                guards += value;
            }
            ranked.emplace_back(guards, i);
        }
        sort(ranked.begin(), ranked.end());
        vector<int> out;
        out.reserve(k);
        for (int i = 0; i < k; ++i) {
            out.push_back(ranked[i].second);
        }
        return out;
    }
};
