class Solution {
  public:
    int numMatchingSubseq(string s, vector<string> &words) {
        // bucket[wordIndex] = (nextIndex) grouped by the next char awaited
        array<vector<pair<int, int>>, 26> waiting; // char -> list of (wordIndex, nextIndex)
        int count = 0;
        for (int wi = 0; wi < (int)words.size(); wi++) {
            const string &w = words[wi];
            if (w.empty()) {
                count++;
            } else {
                waiting[w[0] - 'a'].push_back({wi, 1});
            }
        }
        for (char c : s) {
            auto its = std::move(waiting[c - 'a']);
            waiting[c - 'a'].clear();
            for (auto &[wi, i] : its) {
                const string &w = words[wi];
                if (i == (int)w.size()) {
                    count++;
                } else {
                    waiting[w[i] - 'a'].push_back({wi, i + 1});
                }
            }
        }
        return count;
    }
};
