class Solution {
  public:
    int totalMinTimesSum(vector<int> &power) {
        static const long long MOD = 1000000007LL;
        int n = power.size();

        // prev[i]: index of nearest strictly-smaller element to the left, else -1.
        vector<int> prev(n);
        vector<int> stack(n);
        int top = -1;
        for (int i = 0; i < n; i++) {
            while (top >= 0 && power[stack[top]] >= power[i]) {
                top--;
            }
            prev[i] = top >= 0 ? stack[top] : -1;
            stack[++top] = i;
        }

        // nxt[i]: index of nearest element <= power[i] to the right, else n.
        vector<int> nxt(n);
        top = -1;
        for (int i = n - 1; i >= 0; i--) {
            while (top >= 0 && power[stack[top]] > power[i]) {
                top--;
            }
            nxt[i] = top >= 0 ? stack[top] : n;
            stack[++top] = i;
        }

        // All prefix sums are kept reduced mod MOD; only residues are needed below.
        vector<long long> prefix(n + 1);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = (prefix[i] + power[i]) % MOD;
        }

        // pre_prefix[k] = sum of prefix[0..k-1]
        vector<long long> pre_prefix(n + 2);
        for (int i = 0; i <= n; i++) {
            pre_prefix[i + 1] = (pre_prefix[i] + prefix[i]) % MOD;
        }

        long long answer = 0;
        for (int i = 0; i < n; i++) {
            long long left = i - prev[i];
            long long right = nxt[i] - i;
            long long sum_left = (pre_prefix[i + 1] - pre_prefix[prev[i] + 1] + MOD) % MOD;
            long long sum_right = (pre_prefix[nxt[i] + 1] - pre_prefix[i + 1] + MOD) % MOD;
            // Python's % is always non-negative; normalize explicitly.
            long long term = ((left * sum_right - right * sum_left) % MOD + MOD) % MOD;
            long long contribution = (power[i] % MOD) * term % MOD;
            answer = (answer + contribution) % MOD;
        }
        return (int)answer;
    }
};
