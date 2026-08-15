class Solution {
  public:
    int minDays(vector<int> &bloomDay, int m, int k) {
        int n = bloomDay.size();
        if ((long long)m * k > n) {
            return -1;
        }
        auto feasible = [&](int day) {
            int bouquets = 0;
            int run = 0;
            for (int d : bloomDay) {
                if (d <= day) {
                    run++;
                    if (run == k) {
                        bouquets++;
                        run = 0;
                    }
                } else {
                    run = 0;
                }
            }
            return bouquets >= m;
        };
        int lo = *min_element(bloomDay.begin(), bloomDay.end());
        int hi = *max_element(bloomDay.begin(), bloomDay.end());
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
