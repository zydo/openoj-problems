class Solution {
  public:
    int minSwaps(vector<int> &data) {
        int ones = 0;
        for (int v : data) {
            ones += v;
        }
        if (ones <= 1) {
            return 0;
        }
        int zeros = 0;
        for (int i = 0; i < ones; i++) {
            if (data[i] == 0) {
                zeros++;
            }
        }
        int best = zeros;
        for (int i = ones; i < (int)data.size(); i++) {
            zeros += (1 - data[i]) - (1 - data[i - ones]);
            if (zeros < best) {
                best = zeros;
            }
        }
        return best;
    }
};
