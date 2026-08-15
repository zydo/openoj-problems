class Solution {
  public:
    int maximumGood(vector<vector<int>> &statements) {
        int n = statements.size();
        int best = 0;
        for (int mask = 0; mask < (1 << n); mask++) {
            bool valid = true;
            int count = 0;
            for (int i = 0; i < n && valid; i++) {
                if (!(mask & (1 << i))) {
                    continue;
                }
                count++;
                for (int j = 0; j < n; j++) {
                    if (statements[i][j] == 2) {
                        continue;
                    }
                    bool isGood = (mask >> j) & 1;
                    if (isGood != (statements[i][j] == 1)) {
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
