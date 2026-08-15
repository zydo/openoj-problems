class Solution {
  public:
    int matrixMedian(vector<vector<int>> &grid) {
        int m = grid.size(), n = grid[0].size();
        long long need = (long long)m * n / 2 + 1;
        int lo = INT_MAX, hi = INT_MIN;
        for (const auto &row : grid) {
            lo = min(lo, row.front());
            hi = max(hi, row.back());
        }
        auto countLe = [&](int x) {
            long long total = 0;
            for (const auto &row : grid) {
                total += upper_bound(row.begin(), row.end(), x) - row.begin();
            }
            return total;
        };
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countLe(mid) >= need)
                hi = mid;
            else
                lo = mid + 1;
        }
        return lo;
    }
};
