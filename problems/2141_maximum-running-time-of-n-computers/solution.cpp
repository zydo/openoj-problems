class Solution {
  public:
    long long maxRunTime(int n, vector<int> &batteries) {
        long long sum = 0;
        for (int b : batteries) {
            sum += b;
        }
        auto feasible = [&](long long t) {
            long long total = 0;
            for (int b : batteries) {
                total += min((long long)b, t);
            }
            return total >= (long long)n * t;
        };
        long long lo = 0;
        long long hi = sum / n;
        while (lo < hi) {
            long long mid = (lo + hi + 1) / 2;
            if (feasible(mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }
};
