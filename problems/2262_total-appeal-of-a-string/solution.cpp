class Solution {
  public:
    long long appealSum(string s) {
        long long last[26];
        fill(begin(last), end(last), -1);
        long long total = 0;
        long long current = 0;
        for (int i = 0; i < (int)s.size(); i++) {
            int c = s[i] - 'a';
            current += i - last[c];
            last[c] = i;
            total += current;
        }
        return total;
    }
};
