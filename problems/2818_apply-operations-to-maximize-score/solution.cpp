class Solution {
  public:
    int maximumScore(vector<int> &nums, int k) {
        const long long MOD = 1000000007LL;
        int n = nums.size();
        int maxv = 0;
        for (int x : nums)
            maxv = max(maxv, x);

        vector<int> spf(maxv + 1);
        for (int i = 0; i <= maxv; i++)
            spf[i] = i;
        for (int i = 2; (long long)i * i <= maxv; i++) {
            if (spf[i] == i) {
                for (int j = i * i; j <= maxv; j += i) {
                    if (spf[j] == j)
                        spf[j] = i;
                }
            }
        }

        vector<int> scores(n);
        for (int i = 0; i < n; i++) {
            int v = nums[i];
            int cnt = 0;
            int lastp = -1;
            while (v > 1) {
                int p = spf[v];
                if (p != lastp) {
                    cnt++;
                    lastp = p;
                }
                while (v % p == 0)
                    v /= p;
            }
            scores[i] = cnt;
        }

        vector<int> left(n), right(n), stackIdx(n);
        int top = 0;
        for (int i = 0; i < n; i++) {
            while (top > 0 && scores[stackIdx[top - 1]] < scores[i])
                top--;
            left[i] = top > 0 ? stackIdx[top - 1] : -1;
            stackIdx[top++] = i;
        }
        top = 0;
        for (int i = n - 1; i >= 0; i--) {
            while (top > 0 && scores[stackIdx[top - 1]] <= scores[i])
                top--;
            right[i] = top > 0 ? stackIdx[top - 1] : n;
            stackIdx[top++] = i;
        }

        vector<int> idx(n);
        for (int i = 0; i < n; i++)
            idx[i] = i;
        stable_sort(idx.begin(), idx.end(), [&](int a, int b) { return nums[a] > nums[b]; });

        long long score = 1;
        long long rem = k;
        for (int i : idx) {
            long long cnt = (long long)(i - left[i]) * (right[i] - i);
            long long use = min(cnt, rem);
            if (use > 0) {
                score = score * modpow(nums[i], use, MOD) % MOD;
                rem -= use;
            }
            if (rem == 0)
                break;
        }
        return (int)score;
    }

  private:
    long long modpow(long long base, long long e, long long mod) {
        long long r = 1 % mod;
        long long b = base % mod;
        while (e > 0) {
            if (e & 1)
                r = r * b % mod;
            b = b * b % mod;
            e >>= 1;
        }
        return r;
    }
};
