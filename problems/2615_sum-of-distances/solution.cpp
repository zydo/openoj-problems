class Solution {
  public:
    vector<long long> distance(vector<int> &nums) {
        unordered_map<int, vector<int>> pos;
        for (int i = 0; i < (int)nums.size(); i++) {
            pos[nums[i]].push_back(i);
        }
        vector<long long> arr(nums.size(), 0);
        for (auto &[x, idxs] : pos) {
            (void)x;
            int m = (int)idxs.size();
            vector<long long> prefix(m + 1, 0);
            for (int j = 0; j < m; j++) {
                prefix[j + 1] = prefix[j] + idxs[j];
            }
            for (int j = 0; j < m; j++) {
                long long i = idxs[j];
                long long left = i * j - prefix[j];
                long long right = (prefix[m] - prefix[j + 1]) - i * (m - 1 - j);
                arr[idxs[j]] = left + right;
            }
        }
        return arr;
    }
};
