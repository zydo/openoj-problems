class Solution {
  public:
    string reorganizeString(string s) {
        int n = s.size();
        array<int, 26> counts{};
        for (char c : s) {
            counts[c - 'a']++;
        }
        vector<pair<int, int>> letters; // (char, count)
        for (int c = 0; c < 26; c++) {
            if (counts[c] > 0) {
                letters.push_back({c, counts[c]});
            }
        }
        sort(letters.begin(), letters.end(), [](const pair<int, int> &a, const pair<int, int> &b) {
            if (a.second != b.second)
                return a.second > b.second;
            return a.first < b.first;
        });
        if (letters[0].second > (n + 1) / 2) {
            return "";
        }
        string res(n, ' ');
        int idx = 0;
        for (auto &[c, cnt] : letters) {
            char ch = 'a' + c;
            for (int k = 0; k < cnt; k++) {
                if (idx >= n) {
                    idx = 1;
                }
                res[idx] = ch;
                idx += 2;
            }
        }
        return res;
    }
};
