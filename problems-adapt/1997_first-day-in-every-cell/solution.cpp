class Solution {
  public:
    int firstDayInEveryCell(vector<int> &nextVisit) {
        const long long MOD = 1000000007LL;
        int n = nextVisit.size();
        // f[i] = day cell i is first visited; f[0] = 0 anchors the recurrence.
        vector<long long> f(n, 0);
        for (int i = 1; i < n; ++i) {
            // Thrown from i-1 back to j = nextVisit[i-1], cells 0..i-2 are
            // all even again — the exact state of day f[j]+1 — so the
            // deterministic replay costs f[i-1]-f[j]-1 days; add the first
            // visit of i-1 and the step into i for 2*f[i-1] - f[j] + 2.
            f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2) % MOD;
            // C++ % keeps the dividend's sign; shift negative days into [0, MOD).
            if (f[i] < 0) {
                f[i] += MOD;
            }
        }
        return (int)f[n - 1];
    }
};
