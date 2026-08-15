class Solution {
  public:
    int findMaximumXOR(vector<int> &nums) {
        int best = 0;
        int mask = 0;
        for (int bit = 30; bit >= 0; bit--) {
            mask |= 1 << bit;
            unordered_set<int> prefixes;
            for (int value : nums) {
                prefixes.insert(value & mask);
            }
            int candidate = best | (1 << bit);
            bool found = false;
            for (int prefix : prefixes) {
                if (prefixes.count(candidate ^ prefix)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                best = candidate;
            }
        }
        return best;
    }
};
