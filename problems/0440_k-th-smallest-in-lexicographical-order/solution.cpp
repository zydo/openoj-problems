class Solution {
  public:
    int findKthNumber(int n, int k) {
        long long cur = 1;
        long long kk = k - 1;
        while (kk > 0) {
            long long steps = countSteps(n, cur, cur + 1);
            if (steps <= kk) {
                cur += 1;
                kk -= steps;
            } else {
                cur *= 10;
                kk -= 1;
            }
        }
        return (int)cur;
    }

  private:
    long long countSteps(long long n, long long n1, long long n2) {
        long long steps = 0;
        while (n1 <= n) {
            steps += min(n + 1, n2) - n1;
            n1 *= 10;
            n2 *= 10;
        }
        return steps;
    }
};
