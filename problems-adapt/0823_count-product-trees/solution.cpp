class Solution {
  public:
    int countProductTrees(vector<int> &values) {
        const long long MOD = 1000000007LL;
        sort(values.begin(), values.end());
        unordered_map<int, int> index;
        for (int i = 0; i < (int)values.size(); i++) {
            index[values[i]] = i;
        }
        vector<long long> dp(values.size(), 1); // dp[i] = trees rooted at values[i]
        for (int i = 0; i < (int)values.size(); i++) {
            int v = values[i];
            long long total = 1;
            for (int j = 0; j < i; j++) {
                if (v % values[j] == 0) {
                    auto it = index.find(v / values[j]);
                    if (it != index.end()) {
                        total += dp[j] * dp[it->second];
                    }
                }
            }
            dp[i] = total % MOD;
        }
        long long sum = 0;
        for (long long value : dp) {
            sum += value;
        }
        return (int)(sum % MOD);
    }
};
