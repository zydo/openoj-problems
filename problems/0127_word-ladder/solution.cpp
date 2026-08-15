class Solution {
  public:
    int ladderLength(string beginWord, string endWord, vector<string> &wordList) {
        unordered_set<string> words(wordList.begin(), wordList.end());
        if (!words.count(endWord))
            return 0;
        int length = (int)beginWord.size();

        unordered_map<string, vector<string>> buckets;
        for (const string &word : wordList) {
            for (int i = 0; i < length; ++i)
                buckets[pattern(word, i)].push_back(word);
        }

        unordered_set<string> visited{beginWord};
        vector<string> queue{beginWord};
        int steps = 1;
        while (!queue.empty()) {
            vector<string> next;
            for (const string &word : queue) {
                if (word == endWord)
                    return steps;
                for (int i = 0; i < length; ++i) {
                    auto found = buckets.find(pattern(word, i));
                    if (found == buckets.end())
                        continue;
                    for (const string &neighbor : found->second)
                        if (visited.insert(neighbor).second)
                            next.push_back(neighbor);
                    buckets.erase(found);
                }
            }
            queue = move(next);
            ++steps;
        }
        return 0;
    }

  private:
    static string pattern(const string &word, int i) {
        string key = word;
        key[i] = '*';
        return key;
    }
};
