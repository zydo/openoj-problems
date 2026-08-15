class Solution {
  public:
    vector<string> findRepeatedDnaSequences(string s) {
        unordered_set<string> seen;
        unordered_set<string> repeated;
        if (s.size() >= 10) {
            for (size_t i = 0; i + 10 <= s.size(); i++) {
                string seq = s.substr(i, 10);
                if (!seen.insert(seq).second) {
                    repeated.insert(std::move(seq));
                }
            }
        }
        vector<string> result(repeated.begin(), repeated.end());
        sort(result.begin(), result.end());
        return result;
    }
};
