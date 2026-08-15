class Solution {
  public:
    int maxScoreWords(vector<string> &words, vector<string> &letters, vector<int> &score) {
        array<int, 26> available{};
        for (auto &s : letters)
            available[s[0] - 'a']++;
        int n = words.size();
        vector<array<int, 26>> needs(n);
        vector<int> values(n);
        for (int i = 0; i < n; i++) {
            for (char ch : words[i]) {
                int j = ch - 'a';
                needs[i][j]++;
                values[i] += score[j];
            }
        }
        int best = 0;
        function<void(int, array<int, 26> &, int)> dfs = [&](int i, array<int, 26> &remaining,
                                                             int total) {
            best = max(best, total);
            if (i == n)
                return;
            dfs(i + 1, remaining, total);
            auto &need = needs[i];
            bool ok = true;
            for (int j = 0; j < 26; j++) {
                if (remaining[j] < need[j]) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                array<int, 26> next = remaining;
                for (int j = 0; j < 26; j++)
                    next[j] -= need[j];
                dfs(i + 1, next, total + values[i]);
            }
        };
        dfs(0, available, 0);
        return best;
    }
};
