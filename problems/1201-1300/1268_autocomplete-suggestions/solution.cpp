class Solution {
  public:
    vector<vector<string>> suggestWords(vector<string> &catalog, string query) {
        // lexicographic order makes every shared prefix a contiguous run
        vector<string> sorted(catalog.begin(), catalog.end());
        sort(sorted.begin(), sorted.end());
        vector<vector<string>> result;
        string prefix;
        for (char ch : query) {
            // grow the prefix one typed character at a time
            prefix.push_back(ch);
            // lower bound: where the run of words >= prefix begins
            auto it = lower_bound(sorted.begin(), sorted.end(), prefix);
            vector<string> suggestions;
            // first three of the run; stop at the first word not sharing
            // the prefix — cost is independent of run length
            for (auto p = it; p != sorted.end() && suggestions.size() < 3; ++p) {
                if (p->compare(0, prefix.size(), prefix) == 0) {
                    suggestions.push_back(*p);
                } else {
                    break;
                }
            }
            result.push_back(move(suggestions));
        }
        return result;
    }
};
