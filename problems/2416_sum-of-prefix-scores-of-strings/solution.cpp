class Solution {
  public:
    vector<int> sumPrefixScores(vector<string> &words) {
        struct Node {
            unordered_map<char, int> next;
            int cnt = 0;
        };
        vector<Node> trie(1);
        for (const string &word : words) {
            int node = 0;
            for (char ch : word) {
                auto it = trie[node].next.find(ch);
                if (it == trie[node].next.end()) {
                    trie.push_back(Node());
                    it = trie[node].next.emplace(ch, (int)trie.size() - 1).first;
                }
                node = it->second;
                trie[node].cnt++;
            }
        }
        vector<int> scores;
        scores.reserve(words.size());
        for (const string &word : words) {
            int node = 0;
            int total = 0;
            for (char ch : word) {
                node = trie[node].next[ch];
                total += trie[node].cnt;
            }
            scores.push_back(total);
        }
        return scores;
    }
};
