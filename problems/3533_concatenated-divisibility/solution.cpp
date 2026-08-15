class Solution {
  public:
    vector<int> concatenatedDivisibility(vector<int> &nums, int k) {
        int n = nums.size();
        vector<int> lens(n);
        for (int i = 0; i < n; i++) {
            int x = nums[i], len = 0;
            while (x) {
                len++;
                x /= 10;
            }
            lens[i] = len;
        }
        long long pow10[8];
        pow10[0] = 1;
        for (int i = 1; i < 8; i++)
            pow10[i] = pow10[i - 1] * 10;

        int full = (1 << n) - 1;
        vector<vector<char>> dp(1 << n, vector<char>(k, 0));
        dp[full][0] = 1;
        for (int mask = full - 1; mask >= 0; mask--) {
            for (int rem = 0; rem < k; rem++) {
                for (int i = 0; i < n; i++) {
                    if (!((mask >> i) & 1)) {
                        int nrem = (int)(((long long)rem * pow10[lens[i]] + nums[i]) % k);
                        if (dp[mask | (1 << i)][nrem]) {
                            dp[mask][rem] = 1;
                            break;
                        }
                    }
                }
            }
        }

        vector<int> res;
        if (!dp[0][0])
            return res;

        vector<int> order(n);
        for (int i = 0; i < n; i++)
            order[i] = i;
        stable_sort(order.begin(), order.end(), [&](int a, int b) { return nums[a] < nums[b]; });

        int mask = 0;
        long long rem = 0;
        for (int step = 0; step < n; step++) {
            for (int i : order) {
                if (!((mask >> i) & 1)) {
                    long long nrem = (rem * pow10[lens[i]] + nums[i]) % k;
                    if (dp[mask | (1 << i)][(int)nrem]) {
                        res.push_back(nums[i]);
                        mask |= 1 << i;
                        rem = nrem;
                        break;
                    }
                }
            }
        }
        return res;
    }
};
