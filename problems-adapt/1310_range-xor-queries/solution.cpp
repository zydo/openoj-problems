class Solution {
  public:
    vector<int> rangeXorQueries(vector<int> &nums, vector<vector<int>> &queries) {
        int n = nums.size();
        // prefix[t] = XOR of the first t elements (prefix[0] = 0).
        vector<int> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] ^ nums[i];
        }
        // Self-inverse XOR telescopes: elements before l appear in both
        // operands and annihilate, leaving exactly nums[l..r] — O(1) per query.
        vector<int> result;
        result.reserve(queries.size());
        for (const auto &q : queries) {
            result.push_back(prefix[q[1] + 1] ^ prefix[q[0]]);
        }
        return result;
    }
};
