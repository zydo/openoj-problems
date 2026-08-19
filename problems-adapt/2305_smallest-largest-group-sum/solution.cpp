class Solution {
  public:
    int smallestLargestGroupSum(vector<int> &nums, int k) {
        vector<long long> groups(k, 0);
        // +inf start guarantees the first complete leaf always improves on best
        long long best = LLONG_MAX;
        backtrack(nums, groups, 0, 0, best, k);
        return (int)best;
    }

  private:
    void backtrack(vector<int> &nums, vector<long long> &groups, int i, long long curMax, long long &best, int k) {
        // bound pruning: the running max only grows, so this branch can no
        // longer beat the best complete distribution found so far
        if (curMax >= best)
            return;
        // all items placed: the running max is this leaf's cost
        if (i == (int)nums.size()) {
            best = curMax;
            return;
        }
        unordered_set<long long> tried;
        for (int j = 0; j < k; j++) {
            // symmetry: groups holding equal totals are interchangeable,
            // so try each distinct total only once
            if (tried.count(groups[j]))
                continue;
            tried.insert(groups[j]);
            groups[j] += nums[i];
            backtrack(nums, groups, i + 1, max(curMax, groups[j]), best, k);
            groups[j] -= nums[i];
        }
    }
};
