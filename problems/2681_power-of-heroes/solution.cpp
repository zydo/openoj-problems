class Solution {
  public:
    int sumOfPower(vector<int> &nums) {
        const long long MOD = 1000000007LL;
        vector<int> arr(nums);
        sort(arr.begin(), arr.end());
        long long ans = 0;
        long long s = 0;
        for (int x : arr) {
            long long lx = x;
            ans = (ans + (lx * lx % MOD) * ((s + lx) % MOD)) % MOD;
            s = (2 * s + lx) % MOD;
        }
        return (int)ans;
    }
};
