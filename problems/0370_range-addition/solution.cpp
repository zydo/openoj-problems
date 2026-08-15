class Solution {
  public:
    vector<int> getModifiedArray(int length, vector<vector<int>> &updates) {
        vector<long long> diff(length + 1, 0);
        for (const auto &u : updates) {
            diff[u[0]] += u[2];
            diff[u[1] + 1] -= u[2];
        }
        vector<int> arr(length);
        long long cur = 0;
        for (int i = 0; i < length; ++i) {
            cur += diff[i];
            arr[i] = (int)cur;
        }
        return arr;
    }
};
