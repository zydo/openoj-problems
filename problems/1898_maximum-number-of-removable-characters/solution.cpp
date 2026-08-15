class Solution {
  public:
    int maximumRemovals(string s, string p, vector<int> &removable) {
        int lo = 0, hi = (int)removable.size();
        while (lo < hi) {
            int mid = (lo + hi + 1) / 2;
            if (stillSubsequence(s, p, removable, mid))
                lo = mid;
            else
                hi = mid - 1;
        }
        return lo;
    }

  private:
    bool stillSubsequence(const string &s, const string &p, const vector<int> &removable, int k) {
        vector<char> removed(s.size(), false);
        for (int i = 0; i < k; ++i)
            removed[removable[i]] = true;
        int pi = 0;
        for (int i = 0; i < (int)s.size() && pi < (int)p.size(); ++i) {
            if (!removed[i] && s[i] == p[pi])
                pi++;
        }
        return pi == (int)p.size();
    }
};
