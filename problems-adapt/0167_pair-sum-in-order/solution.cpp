class Solution {
  public:
    vector<int> pairSumInOrder(vector<int> &nums, int target) {
        int left = 0, right = (int)nums.size() - 1;
        while (left < right) {
            int total = nums[left] + nums[right];
            if (total == target)
                // 1-based indices as the problem expects.
                return {left + 1, right + 1};
            if (total < target)
                // Too small: pairing nums[left] with anything smaller than
                // nums[right] only lowers the sum — retire the left value.
                ++left;
            else
                // Too large: retire the right value symmetrically.
                --right;
        }
        // Unreachable under the uniqueness promise; keeps the function total.
        return {};
    }
};
