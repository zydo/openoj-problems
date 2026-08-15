class Solution {
  public:
    vector<string> findAllConcatenatedWordsInADict(vector<string> &words) {
        unordered_set<string> dictionary(words.begin(), words.end());

        vector<string> result;
        for (const string &word : words) {
            if (isConcatenated(word, dictionary)) {
                result.push_back(word);
            }
        }
        return result;
    }

  private:
    bool isConcatenated(const string &word, const unordered_set<string> &dictionary) {
        int n = (int)word.size();
        vector<bool> dp(n + 1, false);
        dp[0] = true;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (j == 0 && i == n) {
                    continue; // the word itself does not count as a part
                }
                if (dp[j] && dictionary.count(word.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
};
