class Solution {
  public:
    int mostTruthful(vector<vector<int>> &statements) {
        int n = statements.size();
        int best = 0;
        // Enumerate every assignment: bit i set means person i is truthful.
        // The constraint is one-sided — truthful people must tell the truth,
        // unreliable people may say anything.
        for (int mask = 0; mask < (1 << n); mask++) {
            bool valid = true;
            int count = 0;
            for (int i = 0; i < n && valid; i++) {
                if (!(mask & (1 << i))) {
                    continue;
                }
                count++;
                for (int j = 0; j < n; j++) {
                    // 2 = no statement; a "j is truthful" claim requires bit j
                    // set and a "j is unreliable" claim requires it clear.
                    if (statements[i][j] == 2) {
                        continue;
                    }
                    bool isTruthful = (mask >> j) & 1;
                    if (isTruthful != (statements[i][j] == 1)) {
                        valid = false;
                        break;
                    }
                }
            }
            if (valid) {
                best = max(best, count);
            }
        }
        return best;
    }
};
