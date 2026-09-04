class Solution {
  public:
    string longestBuildableWord(string s, vector<string> &dictionary) {
        // Deleting characters from s leaves a subsequence, so a word is
        // buildable exactly when it is one. Walk s once, matching each word
        // character at its earliest legal position — greedy is safe, and the
        // word forms iff the pointer runs off its end.
        string best;
        for (const string &word : dictionary) {
            int i = 0;
            for (char ch : s) {
                if (i < (int)word.size() && ch == word[i]) {
                    i++;
                }
            }
            bool buildable = i == (int)word.size();
            // Longer wins; equal lengths go to the lexicographically smaller
            // word. The empty seed makes the no-answer case return "".
            if (buildable && (word.size() > best.size() || (word.size() == best.size() && word < best))) {
                best = word;
            }
        }
        return best;
    }
};
