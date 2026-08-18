class Solution {
  public:
    vector<vector<string>> allShortestBridges(string startWord, string targetWord, vector<string> &dictionary) {
        unordered_set<string> wordSet(dictionary.begin(), dictionary.end());
        if (!wordSet.count(targetWord))
            return {};
        // Drop startWord so the search can never route back through it.
        wordSet.erase(startWord);

        // BFS over the implicit one-letter-difference graph: record each word's
        // shortest distance and a DAG of shortest-path edges.
        unordered_map<string, int> dist;
        dist[startWord] = 0;
        unordered_map<string, vector<string>> adjacency;
        vector<string> queue;
        queue.push_back(startWord);
        string letters = "abcdefghijklmnopqrstuvwxyz";
        for (size_t head = 0; head < queue.size(); head++) {
            string word = queue[head];
            int d = dist[word];
            for (size_t i = 0; i < word.size(); i++) {
                // Try substituting each of the 25 other letters at position i.
                for (char c : letters) {
                    if (c == word[i])
                        continue;
                    string nxt = word;
                    nxt[i] = c;
                    if (!wordSet.count(nxt))
                        continue;
                    auto it = dist.find(nxt);
                    if (it == dist.end()) {
                        // First discovery: nxt is one level below word.
                        dist[nxt] = d + 1;
                        adjacency[word].push_back(nxt);
                        queue.push_back(nxt);
                    } else if (it->second == d + 1) {
                        // Already exactly one level below: parallel shortest edge.
                        adjacency[word].push_back(nxt);
                    }
                    // Same-level or backward edges never lie on a shortest
                    // bridge, so they are simply not recorded.
                }
            }
        }

        vector<vector<string>> result;
        vector<string> path{startWord};

        // DFS over the recorded DAG: every edge advances exactly one BFS level,
        // so any walk from the start to the target is a shortest bridge.
        function<void(const string &)> dfs = [&](const string &word) {
            if (word == targetWord) {
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
        dfs(startWord);
        return result;
    }
};
