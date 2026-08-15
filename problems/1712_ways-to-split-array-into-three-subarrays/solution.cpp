class Solution {
  public:
    int waysToSplit(vector<int> &nums) {
        const long long MOD = 1000000007LL;
        int n = nums.size();
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        long long total = prefix[n];
        long long answer = 0;
        for (int i = 1; i < n - 1; i++) {
            long long left = prefix[i];
            int lo =
                lower_bound(prefix.begin() + i + 1, prefix.begin() + n, 2 * left) - prefix.begin();
            if (lo >= n) {
                continue;
            }
            int hi = upper_bound(prefix.begin() + lo, prefix.begin() + n, (total + left) / 2) -
                     prefix.begin();
            if (hi > lo) {
                answer = (answer + hi - lo) % MOD;
            }
        }
        return (int)answer;
    }
};
