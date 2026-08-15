class Solution {
  public:
    int countOrders(int n) {
        const long long MOD = 1000000007LL;
        long long result = 1;
        for (int i = 2; i <= n; i++) {
            result = result * (2LL * i - 1) % MOD * i % MOD;
        }
        return static_cast<int>(result);
    }
};
