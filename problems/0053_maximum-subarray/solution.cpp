class Solution {
  public:
    int maxSubArray(vector<int> &nums) {
        int best = nums[0];
        int current = nums[0];
        for (size_t i = 1; i < nums.size(); i++) {
            int value = nums[i];
            current = current < 0 ? value : current + value;
            if (current > best) {
                best = current;
            }
        }
        return best;
    }
};
