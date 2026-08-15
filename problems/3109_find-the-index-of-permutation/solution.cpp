class Solution {
  public:
    int getPermutationIndex(vector<int> &perm) {
        const long long MOD = 1000000007LL;
        int n = perm.size();
        vector<long long> fact(n);
        fact[0] = 1;
        for (int i = 1; i < n; i++) {
            fact[i] = fact[i - 1] * i % MOD;
        }

        vector<long long> tree(n + 1, 0);
        auto add = [&](int i, int delta) {
            for (; i <= n; i += i & (-i))
                tree[i] += delta;
        };
        auto query = [&](int i) {
            long long s = 0;
            for (; i > 0; i -= i & (-i))
                s += tree[i];
            return s;
        };

        for (int v = 1; v <= n; v++) {
            add(v, 1);
        }

        long long ans = 0;
        for (int i = 0; i < n; i++) {
            int x = perm[i];
            long long smaller = query(x - 1);
            ans = (ans + smaller % MOD * fact[n - 1 - i]) % MOD;
            add(x, -1);
        }
        return (int)ans;
    }
};
