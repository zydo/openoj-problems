class Solution {
  public:
    int wordCount(vector<string> &startWords, vector<string> &targetWords) {
        auto maskOf = [](const string &w) {
            int m = 0;
            for (char c : w) {
                m |= 1 << (c - 'a');
            }
            return m;
        };

        unordered_set<int> starts;
        for (const string &w : startWords) {
            starts.insert(maskOf(w));
        }
        int count = 0;
        for (const string &t : targetWords) {
            int m = maskOf(t);
            for (int bit = 0; bit < 26; bit++) {
                if ((m & (1 << bit)) && starts.count(m ^ (1 << bit))) {
                    count++;
                    break;
                }
            }
        }
        return count;
    }
};
