class Solution {
  public:
    bool hasAllCodes(string s, int k) {
        int need = 1 << k;
        if ((int)s.size() < k)
            return false;
        unordered_set<string> seen;
        for (int i = 0; i + k <= (int)s.size(); i++) {
            seen.insert(s.substr(i, k));
            if ((int)seen.size() == need)
                return true;
        }
        return (int)seen.size() == need;
    }
};
