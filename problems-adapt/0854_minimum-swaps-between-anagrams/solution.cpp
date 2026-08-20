class Solution {
  public:
    int minimumAnagramSwaps(string startText, string targetText) {
        // Each swap is a move between strings, so BFS from startText yields
        // the minimum swap count.
        queue<pair<string, int>> q;
        q.push({startText, 0});
        unordered_set<string> seen;
        seen.insert(startText);
        while (!q.empty()) {
            auto [s, steps] = q.front();
            q.pop();
            if (s == targetText) {
                return steps;
            }
            // Always fix the leftmost mismatch first: some optimal
            // solution does, and the rule prunes the branching.
            int i = 0;
            while (s[i] == targetText[i]) {
                i++;
            }
            for (int j = i + 1; j < (int)s.size(); j++) {
                // Install targetText's letter at i, and never break an
                // already-matching j — such a swap is never minimal.
                if (s[j] == targetText[i] && s[j] != targetText[j]) {
                    swap(s[i], s[j]);
                    // Only novel strings join the queue; matched
                    // positions are never touched again.
                    if (seen.insert(s).second) {
                        q.push({s, steps + 1});
                    }
                    swap(s[i], s[j]);
                }
            }
        }
        // Unreachable: anagrams are always convertible.
        return -1;
    }
};
