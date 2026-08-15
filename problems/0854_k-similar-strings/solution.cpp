class Solution {
  public:
    int kSimilarity(string s1, string s2) {
        queue<pair<string, int>> q;
        q.push({s1, 0});
        unordered_set<string> seen;
        seen.insert(s1);
        while (!q.empty()) {
            auto [s, steps] = q.front();
            q.pop();
            if (s == s2) {
                return steps;
            }
            int i = 0;
            while (s[i] == s2[i]) {
                i++;
            }
            for (int j = i + 1; j < (int)s.size(); j++) {
                if (s[j] == s2[i] && s[j] != s2[j]) {
                    swap(s[i], s[j]);
                    if (seen.insert(s).second) {
                        q.push({s, steps + 1});
                    }
                    swap(s[i], s[j]);
                }
            }
        }
        return -1;
    }
};
