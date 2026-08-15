class Solution {
  public:
    int maximumTastiness(vector<int> &price, int k) {
        vector<int> p(price);
        sort(p.begin(), p.end());
        auto feasible = [&](int x) {
            int count = 1;
            int last = p[0];
            for (size_t i = 1; i < p.size(); i++) {
                if (p[i] - last >= x) {
                    count++;
                    last = p[i];
                }
            }
            return count >= k;
        };
        int lo = 0, hi = p.back() - p[0];
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (feasible(mid))
                lo = mid;
            else
                hi = mid - 1;
        }
        return lo;
    }
};
