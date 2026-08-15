class Solution {
  public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string> &wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        if (!wordSet.count(endWord))
            return {};
        wordSet.erase(beginWord);

        unordered_map<string, int> dist;
        dist[beginWord] = 0;
        unordered_map<string, vector<string>> adjacency;
        vector<string> queue;
        queue.push_back(beginWord);
        string letters = "abcdefghijklmnopqrstuvwxyz";
        for (size_t head = 0; head < queue.size(); head++) {
            string word = queue[head];
            int d = dist[word];
            for (size_t i = 0; i < word.size(); i++) {
                for (char c : letters) {
                    if (c == word[i])
                        continue;
                    string nxt = word;
                    nxt[i] = c;
                    if (!wordSet.count(nxt))
                        continue;
                    auto it = dist.find(nxt);
                    if (it == dist.end()) {
                        dist[nxt] = d + 1;
                        adjacency[word].push_back(nxt);
                        queue.push_back(nxt);
                    } else if (it->second == d + 1) {
                        adjacency[word].push_back(nxt);
                    }
                }
            }
        }

        vector<vector<string>> result;
        vector<string> path{beginWord};

        function<void(const string &)> dfs = [&](const string &word) {
            if (word == endWord) {
                result.push_back(path);
                return;
            }
            auto it = adjacency.find(word);
            if (it == adjacency.end())
                return;
            for (const string &nxt : it->second) {
                path.push_back(nxt);
                dfs(nxt);
                path.pop_back();
            }
        };
        dfs(beginWord);
        return result;
    }
};
