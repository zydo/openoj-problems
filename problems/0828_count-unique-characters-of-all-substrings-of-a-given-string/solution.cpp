class Solution {
  public:
    int uniqueLetterString(string s) {
        vector<vector<int>> positions(26);
        for (int i = 0; i < (int)s.size(); i++) {
            positions[s[i] - 'A'].push_back(i);
        }
        int n = s.size();
        long long total = 0;
        for (auto &list : positions) {
            if (list.empty()) {
                continue;
            }
            vector<int> pos;
            pos.reserve(list.size() + 2);
            pos.push_back(-1);
            for (int p : list) {
                pos.push_back(p);
            }
            pos.push_back(n);
            for (int k = 1; k < (int)pos.size() - 1; k++) {
                total += (long long)(pos[k] - pos[k - 1]) * (pos[k + 1] - pos[k]);
            }
        }
        return (int)total;
    }
};
