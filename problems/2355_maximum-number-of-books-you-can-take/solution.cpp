class Solution {
  public:
    long long maximumBooks(vector<int> &books) {
        int n = (int)books.size();
        vector<long long> dp(n, 0);
        vector<int> stack;
        stack.reserve(n);
        long long best = 0;
        for (int i = 0; i < n; i++) {
            long long bi = books[i];
            while (!stack.empty() && books[stack.back()] >= bi - (i - stack.back())) {
                stack.pop_back();
            }
            int j = stack.empty() ? -1 : stack.back();
            long long length;
            if (j >= 0) {
                length = i - j;
            } else {
                length = min((long long)i, bi) + 1; // stop where the sequence would go negative
            }
            long long s = length * bi - length * (length - 1) / 2;
            dp[i] = s + (j >= 0 ? dp[j] : 0);
            if (dp[i] > best) {
                best = dp[i];
            }
            stack.push_back(i);
        }
        return best;
    }
};
