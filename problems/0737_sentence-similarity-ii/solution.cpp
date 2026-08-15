class Solution {
  public:
    bool areSentencesSimilarTwo(vector<string> &sentence1, vector<string> &sentence2,
                                vector<vector<string>> &similarPairs) {
        if (sentence1.size() != sentence2.size())
            return false;

        unordered_map<string, string> parent;
        function<string(const string &)> find = [&](const string &x) -> string {
            auto it = parent.find(x);
            if (it == parent.end()) {
                parent.emplace(x, x);
                return x;
            }
            if (it->second == x)
                return x;
            string r = find(it->second);
            it->second = r;
            return r;
        };

        for (const auto &pair : similarPairs) {
            string ra = find(pair[0]);
            string rb = find(pair[1]);
            if (ra != rb)
                parent[ra] = rb;
        }

        for (size_t i = 0; i < sentence1.size(); i++) {
            if (sentence1[i] != sentence2[i] && find(sentence1[i]) != find(sentence2[i])) {
                return false;
            }
        }
        return true;
    }
};
