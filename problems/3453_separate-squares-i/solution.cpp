class Solution {
  public:
    double separateSquares(vector<vector<int>> &squares) {
        long long total = 0; // exact integer accumulation (mirrors Python's int sum)
        long long hiTop = LLONG_MIN;
        for (const auto &sq : squares) {
            long long l = sq[2];
            total += l * l;
            long long top = (long long)sq[1] + l;
            if (top > hiTop)
                hiTop = top;
        }
        double target = (double)total / 2.0;
        double lo = 0.0;
        double hi = (double)hiTop;
        for (int it = 0; it < 60; it++) {
            double mid = (lo + hi) / 2.0;
            double below = 0.0;
            for (const auto &sq : squares) {
                long long y = sq[1];
                long long l = sq[2];
                if (mid <= y)
                    continue;
                long long top = y + l;
                double m = mid < top ? mid : (double)top; // min(mid, y + l)
                below += (m - y) * l;
            }
            if (below >= target)
                hi = mid;
            else
                lo = mid;
        }
        return hi;
    }
};
