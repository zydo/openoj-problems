class Solution {
  public:
    int smallestLargestBinLoad(int n, vector<int> &piles) {
        // Feasibility is monotone in the cap x, so binary-search the
        // smallest feasible one. hi = max(piles) is always feasible
        // (one bin can take an entire pile).
        int lo = 1;
        int hi = *max_element(piles.begin(), piles.end());
        // Invariant: lo possibly too small, hi known feasible; the sum check
        // uses <= n since leftover bins may receive nothing.
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (binsNeeded(piles, mid) <= (long long)n) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    long long binsNeeded(vector<int> &piles, int x) {
        // A bin holds items from one pile only, so a pile with q items needs
        // ceil(q/x) bins; integer arithmetic avoids floats.
        long long total = 0;
        for (int q : piles) {
            total += (q + x - 1) / x;
        }
        return total;
    }
};
