class Solution {
  public:
    int longestOverworkedStretch(vector<int> &hours) {
        // earliest index each prefix value has been seen; {0: -1} lets
        // blocks starting at index 0 be handled uniformly
        unordered_map<int, int> first;
        first[0] = -1;
        int prefix = 0;
        int best = 0;
        for (int i = 0; i < (int)hours.size(); i++) {
            // heavy day scores +1, light day -1: an overworked block is
            // exactly a subarray whose sum is strictly positive
            prefix += hours[i] > 8 ? 1 : -1;
            if (prefix > 0) {
                // the whole prefix hours[0..i] is already overworked
                best = i + 1;
            } else if (first.count(prefix - 1)) {
                // cut just after the earliest prefix-1: the remainder sums to
                // exactly 1, and since steps are unit-sized no longer block
                // can end at i
                best = max(best, i - first[prefix - 1]);
            }
            if (!first.count(prefix)) {
                // record only the first sighting so stored indices stay leftmost
                first[prefix] = i;
            }
        }
        return best;
    }
};
