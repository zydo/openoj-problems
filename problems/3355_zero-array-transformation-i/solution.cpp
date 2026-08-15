class Solution {
  public:
    bool isZeroArray(vector<int> &nums, vector<vector<int>> &queries) {
        int n = (int)nums.size();
        vector<int> diff(n + 1, 0);
        for (const auto &q : queries) {
            diff[q[0]] += 1;
            diff[q[1] + 1] -= 1;
        }
        int coverage = 0;
        for (int i = 0; i < n; i++) {
            coverage += diff[i];
            if (coverage < nums[i])
                return false;
        }
        return true;
    }
};
