class Solution {
  public:
    int minimumLengthEncoding(vector<string> &words) {
        unordered_set<string> keep(words.begin(), words.end());
        for (const string &w : words) {
            for (int k = 1; k < (int)w.size(); k++) {
                keep.erase(w.substr(k));
            }
        }
        int total = 0;
        for (const string &w : keep) {
            total += (int)w.size() + 1;
        }
        return total;
    }
};
