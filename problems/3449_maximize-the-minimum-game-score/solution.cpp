class Solution {
  public:
    long long maxScore(vector<int> &points, int m) {
        int n = (int)points.size();
        long long lo = 0, hi = 0;
        for (int p : points)
            hi = max(hi, (long long)p * m);
        while (lo < hi) {
            long long mid = lo + (hi - lo + 1) / 2;
            if (feasible(points, (long long)m, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

  private:
    bool feasible(vector<int> &points, long long m, long long target) {
        int n = (int)points.size();
        long long moves = 0;
        long long prev = 0;
        for (int i = 0; i < n; i++) {
            long long gp = points[i];
            long long remain = (target + gp - 1) / gp - prev;
            if (remain >= 1) {
                prev = remain - 1;
                moves += 2 * remain - 1;
            } else if (i != n - 1) {
                prev = 0;
                moves += 1;
            }
            if (moves > m) {
                return false;
            }
        }
        return moves <= m;
    }
};
