class Solution {
  public:
    long long maxPoints(vector<vector<int>> &points) {
        int m = points.size();
        int n = points[0].size();
        vector<long long> prev(n), left(n), right(n);
        for (int c = 0; c < n; c++)
            prev[c] = points[0][c];
        for (int r = 1; r < m; r++) {
            long long best = prev[0] + 0;
            for (int c = 0; c < n; c++) {
                if (prev[c] + c > best)
                    best = prev[c] + c;
                left[c] = best;
            }
            best = prev[n - 1] - (n - 1);
            for (int c = n - 1; c >= 0; c--) {
                if (prev[c] - c > best)
                    best = prev[c] - c;
                right[c] = best;
            }
            for (int c = 0; c < n; c++) {
                long long l = left[c] - c;
                long long rr = right[c] + c;
                prev[c] = points[r][c] + (l > rr ? l : rr);
            }
        }
        long long ans = prev[0];
        for (int c = 1; c < n; c++) {
            if (prev[c] > ans)
                ans = prev[c];
        }
        return ans;
    }
};
