class Solution {
  public:
    int nthUglyNumber(int n) {
        vector<int> ugly(n + 1);
        ugly[0] = 1;
        int i2 = 0, i3 = 0, i5 = 0;
        for (int i = 1; i <= n; ++i) {
            int m2 = ugly[i2] * 2, m3 = ugly[i3] * 3, m5 = ugly[i5] * 5;
            int nxt = min(m2, min(m3, m5));
            ugly[i] = nxt;
            if (nxt == m2)
                ++i2;
            if (nxt == m3)
                ++i3;
            if (nxt == m5)
                ++i5;
        }
        return ugly[n - 1];
    }
};
