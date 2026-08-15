class Solution {
  public:
    int distributeCookies(vector<int> &cookies, int k) {
        vector<long long> children(k, 0);
        long long best = LLONG_MAX;
        backtrack(cookies, children, 0, 0, best, k);
        return (int)best;
    }

  private:
    void backtrack(vector<int> &cookies, vector<long long> &children, int i, long long curMax,
                   long long &best, int k) {
        if (curMax >= best)
            return;
        if (i == (int)cookies.size()) {
            best = curMax;
            return;
        }
        unordered_set<long long> tried;
        for (int j = 0; j < k; j++) {
            if (tried.count(children[j]))
                continue;
            tried.insert(children[j]);
            children[j] += cookies[i];
            backtrack(cookies, children, i + 1, max(curMax, children[j]), best, k);
            children[j] -= cookies[i];
        }
    }
};
