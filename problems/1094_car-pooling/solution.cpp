class Solution {
  public:
    bool carPooling(vector<vector<int>> &trips, int capacity) {
        vector<int> diff(1001, 0);
        for (const auto &t : trips) {
            diff[t[1]] += t[0];
            diff[t[2]] -= t[0];
        }
        int used = 0;
        for (int delta : diff) {
            used += delta;
            if (used > capacity) {
                return false;
            }
        }
        return true;
    }
};
