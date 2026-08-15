class Solution {
  public:
    vector<vector<string>> suggestedProducts(vector<string> &products, string searchWord) {
        vector<string> sorted(products.begin(), products.end());
        sort(sorted.begin(), sorted.end());
        vector<vector<string>> result;
        string prefix;
        for (char ch : searchWord) {
            prefix.push_back(ch);
            auto it = lower_bound(sorted.begin(), sorted.end(), prefix);
            vector<string> suggestions;
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
