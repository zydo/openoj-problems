class Solution {
  public:
    long long minimumTime(vector<int> &time, int totalTrips) {
        long long mn = *min_element(time.begin(), time.end());
        long long lo = 1;
        long long hi = mn * totalTrips;
        auto tripsDone = [&](long long t) {
            long long total = 0;
            for (int x : time) {
                total += t / x;
            }
            return total;
        };
        while (lo < hi) {
            long long mid = (lo + hi) / 2;
            if (tripsDone(mid) >= totalTrips) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
