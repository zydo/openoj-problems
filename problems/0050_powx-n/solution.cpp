class Solution {
  public:
    double myPow(double x, int n) {
        long long exp = n;
        if (exp < 0) {
            return 1.0 / power(x, -exp);
        }
        return power(x, exp);
    }

  private:
    double power(double base, long long exp) {
        double result = 1.0;
        while (exp != 0) {
            if (exp & 1) {
                result *= base;
            }
            base *= base;
            exp >>= 1;
        }
        return result;
    }
};
