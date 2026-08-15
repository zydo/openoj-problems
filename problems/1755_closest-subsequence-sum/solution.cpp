class Solution {
  public:
    int minAbsDifference(vector<int> &nums, int goal) {
        int n = nums.size();
        int half = n / 2;
        vector<int> left = subsetSums(nums, 0, half);
        vector<int> right = subsetSums(nums, half, n);
        sort(left.begin(), left.end());
        int best = INT_MAX;
        for (int s : right) {
            int need = goal - s;
            int idx = lower_bound(left.begin(), left.end(), need) - left.begin();
            for (int j = idx - 1; j <= idx; j++) {
                if (j >= 0 && j < (int)left.size()) {
                    int diff = abs(left[j] + s - goal);
                    if (diff < best)
                        best = diff;
                }
            }
        }
        return best;
    }

  private:
    vector<int> subsetSums(vector<int> &nums, int from, int to) {
        vector<int> sums;
        sums.reserve(1 << (to - from));
        sums.push_back(0);
        for (int i = from; i < to; i++) {
            int value = nums[i];
            size_t size = sums.size();
            for (size_t j = 0; j < size; j++) {
                sums.push_back(sums[j] + value);
            }
        }
        return sums;
    }
};
