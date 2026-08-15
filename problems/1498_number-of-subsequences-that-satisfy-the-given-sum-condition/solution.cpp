class Solution {
  public:
    int numSubseq(vector<int> &nums, int target) {
        const int MOD = 1'000'000'007;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<long long> powers(n);
        powers[0] = 1;
        for (int i = 1; i < n; i++) {
            powers[i] = powers[i - 1] * 2 % MOD;
        }
        long long total = 0;
        int lo = 0, hi = n - 1;
        while (lo <= hi) {
            if (nums[lo] + nums[hi] <= target) {
                total = (total + powers[hi - lo]) % MOD;
                lo++;
            } else {
                hi--;
            }
        }
        return (int)total;
    }
};
