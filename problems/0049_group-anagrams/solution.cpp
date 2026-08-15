class Solution {
  public:
    vector<vector<string>> groupAnagrams(vector<string> &strs) {
        unordered_map<string, int> index;
        vector<vector<string>> groups;
        for (const string &word : strs) {
            string key = word;
            sort(key.begin(), key.end());
            auto it = index.find(key);
            if (it != index.end()) {
                groups[it->second].push_back(word);
            } else {
                index[key] = (int)groups.size();
                groups.push_back({word});
            }
        }
        return groups;
    }
};
