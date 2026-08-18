class Solution {
  public:
    int shortestBridgeLength(string startWord, string targetWord, vector<string> &dictionary) {
        unordered_set<string> words(dictionary.begin(), dictionary.end());
        // No sequence can end outside the dictionary.
        if (!words.count(targetWord))
            return 0;
        int length = (int)startWord.size();

        // File every word under each of its wildcard patterns ("malt"
        // files under "*alt", "m*lt", "ma*t", "mal*"): all one-letter
        // neighbors share one of its patterns.
        unordered_map<string, vector<string>> buckets;
        for (const string &word : dictionary) {
            for (int i = 0; i < length; ++i)
                buckets[pattern(word, i)].push_back(word);
        }

        // Level-order BFS; steps starts at 1 because startWord itself counts.
        unordered_set<string> visited{startWord};
        vector<string> queue{startWord};
        int steps = 1;
        while (!queue.empty()) {
            vector<string> next;
            for (const string &word : queue) {
                if (word == targetWord)
                    return steps;
                for (int i = 0; i < length; ++i) {
                    auto found = buckets.find(pattern(word, i));
                    if (found == buckets.end())
                        continue;
                    // Each word is enqueued at most once.
                    for (const string &neighbor : found->second)
                        if (visited.insert(neighbor).second)
                            next.push_back(neighbor);
                    // Erase the bucket so it is read once overall and never
                    // re-read via a same-level word sharing the pattern.
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
