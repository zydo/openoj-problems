class Solution {
  public:
    vector<int> xorQueries(vector<int> &arr, vector<vector<int>> &queries) {
        int n = arr.size();
        vector<int> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }
        vector<int> result;
        result.reserve(queries.size());
        for (const auto &q : queries) {
            result.push_back(prefix[q[1] + 1] ^ prefix[q[0]]);
        }
        return result;
    }
};
