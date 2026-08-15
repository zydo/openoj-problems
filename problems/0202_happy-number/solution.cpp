class Solution {
  public:
    bool isHappy(int n) {
        auto step = [](int m) {
            int total = 0;
            while (m) {
                int digit = m % 10;
                total += digit * digit;
                m /= 10;
            }
            return total;
        };
        unordered_set<int> seen;
        while (n != 1 && seen.insert(n).second) {
            n = step(n);
        }
        return n == 1;
    }
};
