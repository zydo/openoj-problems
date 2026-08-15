class Solution {
  public:
    long long getMaxFunctionValue(vector<int> &receiver, long long k) {
        int n = receiver.size();
        int log = 64 - __builtin_clzll((unsigned long long)k); // bit length of k (k >= 1)
        vector<vector<int>> up(log, vector<int>(n));
        vector<vector<long long>> sm(log, vector<long long>(n));
        for (int x = 0; x < n; x++) {
            up[0][x] = receiver[x];
            sm[0][x] = receiver[x];
        }
        for (int j = 1; j < log; j++) {
            for (int x = 0; x < n; x++) {
                int mid = up[j - 1][x];
                up[j][x] = up[j - 1][mid];
                sm[j][x] = sm[j - 1][x] + sm[j - 1][mid];
            }
        }
        long long best = 0;
        for (int x = 0; x < n; x++) {
            long long total = x;
            int cur = x;
            long long remaining = k;
            int bit = 0;
            while (remaining) {
                if (remaining & 1) {
                    total += sm[bit][cur];
                    cur = up[bit][cur];
                }
                remaining >>= 1;
                bit += 1;
            }
            if (total > best) {
                best = total;
            }
        }
        return best;
    }
};
