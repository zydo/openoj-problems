class Solution {
  public:
    int firstDayBeenInAllRooms(vector<int> &nextVisit) {
        const long long MOD = 1000000007LL;
        int n = nextVisit.size();
        vector<long long> f(n, 0);
        for (int i = 1; i < n; ++i) {
            f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2) % MOD;
            if (f[i] < 0) {
                f[i] += MOD;
            }
        }
        return (int)f[n - 1];
    }
};
