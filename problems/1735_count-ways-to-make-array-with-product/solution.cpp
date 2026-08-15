class Solution {
  public:
    vector<int> waysToFillArray(vector<vector<int>> &queries) {
        const long long MOD = 1000000007LL;
        const int MAX = 20000;

        vector<long long> fact(MAX + 1);
        fact[0] = 1;
        for (int i = 1; i <= MAX; i++)
            fact[i] = fact[i - 1] * i % MOD;

        auto modPow = [&](long long base, long long exp) {
            long long result = 1;
            long long b = base % MOD;
            while (exp > 0) {
                if (exp & 1)
                    result = result * b % MOD;
                b = b * b % MOD;
                exp >>= 1;
            }
            return result;
        };

        vector<long long> invFact(MAX + 1);
        invFact[MAX] = modPow(fact[MAX], MOD - 2);
        for (int i = MAX; i > 0; i--)
            invFact[i - 1] = invFact[i] * i % MOD;

        auto comb = [&](int n, int r) -> long long {
            if (r < 0 || r > n)
                return 0;
            return fact[n] * invFact[r] % MOD * invFact[n - r] % MOD;
        };

        vector<int> answers;
        answers.reserve(queries.size());
        for (auto &query : queries) {
            int n = query[0];
            int k = query[1];
            long long ways = 1;
            int d = 2;
            while ((long long)d * d <= k) {
                if (k % d == 0) {
                    int exponent = 0;
                    while (k % d == 0) {
                        k /= d;
                        exponent++;
                    }
                    ways = ways * comb(exponent + n - 1, n - 1) % MOD;
                }
                d++;
            }
            if (k > 1) {
                ways = ways * comb(1 + n - 1, n - 1) % MOD;
            }
            answers.push_back((int)ways);
        }
        return answers;
    }
};
