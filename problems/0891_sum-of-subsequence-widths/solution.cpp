class Solution {
  public:
    int sumSubseqWidths(vector<int> &nums) {
        const long long MOD = 1000000007LL;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<long long> pow2(n);
        pow2[0] = 1;
        for (int i = 1; i < n; i++) {
            pow2[i] = pow2[i - 1] * 2 % MOD;
        }
        long long total = 0;
        for (int i = 0; i < n; i++) {
            long long d = pow2[i] - pow2[n - 1 - i];
            total = ((total + nums[i] * d) % MOD + MOD) % MOD;
        }
        return (int)total;
    }
};
