class Solution {
  public:
    int countPrimes(int n) {
        if (n < 3)
            return 0;
        vector<char> isComposite(n, 0);
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (!isComposite[i]) {
                count++;
                if ((long long)i * i < n) {
                    for (long long j = (long long)i * i; j < n; j += i) {
                        isComposite[j] = 1;
                    }
                }
            }
        }
        return count;
    }
};
