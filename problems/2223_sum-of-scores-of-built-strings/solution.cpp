class Solution {
  public:
    long long sumScores(string s) {
        int n = (int)s.size();
        if (n == 0)
            return 0;
        vector<long long> z(n, 0);
        z[0] = n;
        int left = 0, right = 0;
        for (int i = 1; i < n; i++) {
            if (i < right) {
                z[i] = min((long long)(right - i), z[i - left]);
            }
            while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
                z[i] += 1;
            }
            if (i + z[i] > right) {
                left = i;
                right = i + z[i];
            }
        }
        long long total = 0;
        for (long long v : z)
            total += v;
        return total;
    }
};
