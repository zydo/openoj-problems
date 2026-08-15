class Solution {
  public:
    vector<vector<int>> palindromePairs(vector<string> &words) {
        unordered_map<string, int> index;
        for (int i = 0; i < (int)words.size(); i++) {
            index[words[i]] = i;
        }
        set<pair<int, int>> results;

        for (int j = 0; j < (int)words.size(); j++) {
            const string &w = words[j];
            int length = (int)w.size();
            for (int cut = 0; cut <= length; cut++) {
                string prefix = w.substr(0, cut);
                string suffix = w.substr(cut);
                if (isPalindrome(prefix)) {
                    string rev(suffix.rbegin(), suffix.rend());
                    auto it = index.find(rev);
                    if (it != index.end() && it->second != j) {
                        results.insert({it->second, j});
                    }
                }
                if (cut != length && isPalindrome(suffix)) {
                    string rev(prefix.rbegin(), prefix.rend());
                    auto it = index.find(rev);
                    if (it != index.end() && it->second != j) {
                        results.insert({j, it->second});
                    }
                }
            }
        }

        vector<vector<int>> out;
        out.reserve(results.size());
        for (auto &p : results) {
            out.push_back({p.first, p.second});
        }
        return out;
    }

  private:
    bool isPalindrome(const string &s) {
        int a = 0, b = (int)s.size() - 1;
        while (a < b) {
            if (s[a] != s[b])
                return false;
            a++;
            b--;
        }
        return true;
    }
};
