class Solution {
  public:
    bool canChange(string start, string target) {
        int n = (int)start.size();
        vector<pair<int, char>> s, t;
        for (int i = 0; i < n; i++) {
            if (start[i] != '_')
                s.push_back({i, start[i]});
            if (target[i] != '_')
                t.push_back({i, target[i]});
        }
        if (s.size() != t.size())
            return false;
        for (size_t p = 0; p < s.size(); p++) {
            int i = s[p].first;
            char ci = s[p].second;
            int j = t[p].first;
            char cj = t[p].second;
            if (ci != cj)
                return false;
            if (ci == 'L' && i < j)
                return false;
            if (ci == 'R' && i > j)
                return false;
        }
        return true;
    }
};
