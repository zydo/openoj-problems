class Solution {
  public:
    int minSpeedOnTime(vector<int> &dist, double hour) {
        int n = dist.size();
        long long H = llround(hour * 100.0); // hour has at most two decimals
        long long last = 100LL * dist[n - 1];

        auto onTime = [&](long long speed) -> bool {
            long long c = 0;
            for (int i = 0; i + 1 < n; ++i) {
                c += (dist[i] + speed - 1) / speed;
            }
            long long budget = H - 100 * c;
            if (budget < 0)
                return false;
            return budget * speed >= last;
        };

        long long lo = 1, hi = 10000000LL;
        if (!onTime(hi))
            return -1;
        while (lo < hi) {
            long long mid = (lo + hi) / 2;
            if (onTime(mid))
                hi = mid;
            else
                lo = mid + 1;
        }
        return (int)lo;
    }
};
