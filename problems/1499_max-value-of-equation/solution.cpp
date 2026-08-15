class Solution {
  public:
    int findMaxValueOfEquation(vector<vector<int>> &points, int k) {
        int n = points.size();
        vector<int> dq(n);
        int head = 0, tail = 0;
        long long best = LLONG_MIN;
        for (int j = 0; j < n; j++) {
            long long xj = points[j][0];
            long long yj = points[j][1];
            while (head < tail && xj - points[dq[head]][0] > k) {
                head++;
            }
            if (head < tail) {
                long long xi = points[dq[head]][0];
                long long yi = points[dq[head]][1];
                long long value = yj + yi + xj - xi;
                if (value > best) {
                    best = value;
                }
            }
            while (head < tail && points[dq[tail - 1]][1] - points[dq[tail - 1]][0] <= yj - xj) {
                tail--;
            }
            dq[tail++] = j;
        }
        return (int)best;
    }
};
