class Solution {
  public:
    int maximumCandies(vector<int> &candies, long long k) {
        int lo = 0, hi = 0;
        for (int p : candies) {
            hi = max(hi, p);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (can(candies, mid, k)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

  private:
    bool can(vector<int> &candies, int c, long long k) {
        if (c == 0) {
            return true;
        }
        long long cnt = 0;
        for (int p : candies) {
            cnt += p / c;
            if (cnt >= k) {
                return true;
            }
        }
        return cnt >= k;
    }
};
