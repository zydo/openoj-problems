class Solution {
  public:
    vector<int> countClearingProducts(vector<int> &factors, vector<int> &values, long long threshold) {
        // a pair works iff factor * value >= threshold, i.e. value >= need;
        // qualifying values are exactly the strongest suffix of the sorted array
        sort(values.begin(), values.end());
        int n = factors.size();
        int m = values.size();
        vector<int> res(n);
        for (int i = 0; i < n; i++) {
            // ceil(threshold / factor) in integer arithmetic: exact even at 1e10
            long long need = (threshold + factors[i] - 1) / factors[i];
            // first index with values[idx] >= need
            int lo = 0, hi = m;
            while (lo < hi) {
                int mid = lo + (hi - lo) / 2;
                if ((long long)values[mid] >= need)
                    hi = mid;
                else
                    lo = mid + 1;
            }
            // every value from lo on is >= need: that suffix all qualifies
            res[i] = m - lo;
        }
        return res;
    }
};
