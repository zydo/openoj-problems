class Solution {
  public:
    long long maxSubarraySum(vector<int> &nums, int k) {
        int n = (int)nums.size();
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        vector<long long> minPref(k, LLONG_MAX);
        long long best = LLONG_MIN;
        for (int i = 0; i <= n; i++) {
            int r = i % k;
            if (minPref[r] != LLONG_MAX) {
                long long cand = prefix[i] - minPref[r];
                if (cand > best) {
                    best = cand;
                }
            }
            if (prefix[i] < minPref[r]) {
                minPref[r] = prefix[i];
            }
        }
        return best;
    }
};
