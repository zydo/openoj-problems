class Solution {
  public:
    int fewestSwapsToGatherOnes(vector<int> &bits) {
        // the grouped block must hold every 1, so its length is fixed at ones
        int ones = 0;
        for (int v : bits) {
            ones += v;
        }
        if (ones <= 1) {
            // zero or a single 1 (or all zeros) is trivially grouped
            return 0;
        }
        // zeros in the first window: each zero inside costs exactly one swap
        int zeros = 0;
        for (int i = 0; i < ones; i++) {
            if (bits[i] == 0) {
                zeros++;
            }
        }
        int best = zeros;
        for (int i = ones; i < (int)bits.size(); i++) {
            // slide by one: entering element adds its zero-ness, leaving
            // element drops its, so the tally stays exact without rescanning
            zeros += (1 - bits[i]) - (1 - bits[i - ones]);
            if (zeros < best) {
                best = zeros;
            }
        }
        return best;
    }
};
