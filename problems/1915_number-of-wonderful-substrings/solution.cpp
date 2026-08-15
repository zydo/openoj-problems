class Solution {
  public:
    long long wonderfulSubstrings(string word) {
        long long count[1024] = {0};
        count[0] = 1;
        int mask = 0;
        long long total = 0;
        for (char ch : word) {
            mask ^= 1 << (ch - 'a');
            total += count[mask];
            for (int b = 0; b < 10; ++b) {
                total += count[mask ^ (1 << b)];
            }
            count[mask] += 1;
        }
        return total;
    }
};
