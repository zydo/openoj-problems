class Solution {
  public:
    int longestWPI(vector<int> &hours) {
        unordered_map<int, int> first;
        first[0] = -1;
        int prefix = 0;
        int best = 0;
        for (int i = 0; i < (int)hours.size(); i++) {
            prefix += hours[i] > 8 ? 1 : -1;
            if (prefix > 0) {
                best = i + 1;
            } else if (first.count(prefix - 1)) {
                best = max(best, i - first[prefix - 1]);
            }
            if (!first.count(prefix)) {
                first[prefix] = i;
            }
        }
        return best;
    }
};
