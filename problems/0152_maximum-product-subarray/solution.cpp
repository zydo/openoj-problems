class Solution {
  public:
    int maxProduct(vector<int> &nums) {
        int best = nums[0];
        int curMax = nums[0];
        int curMin = nums[0];
        for (size_t i = 1; i < nums.size(); i++) {
            int value = nums[i];
            if (value < 0) {
                swap(curMax, curMin);
            }
            curMax = max(value, curMax * value);
            curMin = min(value, curMin * value);
            best = max(best, curMax);
        }
        return best;
    }
};
