class Solution {
  public:
    vector<int> successfulPairs(vector<int> &spells, vector<int> &potions, long long success) {
        sort(potions.begin(), potions.end());
        int n = spells.size();
        int m = potions.size();
        vector<int> res(n);
        for (int i = 0; i < n; i++) {
            long long need = (success + spells[i] - 1) / spells[i];
            // first index with potions[idx] >= need
            int lo = 0, hi = m;
            while (lo < hi) {
                int mid = lo + (hi - lo) / 2;
                if ((long long)potions[mid] >= need)
                    hi = mid;
                else
                    lo = mid + 1;
            }
            res[i] = m - lo;
        }
        return res;
    }
};
