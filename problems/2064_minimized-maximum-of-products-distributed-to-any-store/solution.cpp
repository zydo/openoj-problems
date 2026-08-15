class Solution {
  public:
    int minimizedMaximum(int n, vector<int> &quantities) {
        int lo = 1;
        int hi = *max_element(quantities.begin(), quantities.end());
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (storesNeeded(quantities, mid) <= (long long)n) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    long long storesNeeded(vector<int> &quantities, int x) {
        long long total = 0;
        for (int q : quantities) {
            total += (q + x - 1) / x;
        }
        return total;
    }
};
