class Solution {
  public:
    int minEatingSpeed(vector<int> &piles, int h) {
        int lo = 1;
        int hi = 0;
        for (int pile : piles) {
            hi = max(hi, pile);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (hoursNeeded(piles, mid) <= h) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    long long hoursNeeded(vector<int> &piles, int k) {
        long long total = 0;
        for (int pile : piles) {
            total += (pile + (long long)k - 1) / k;
        }
        return total;
    }
};
