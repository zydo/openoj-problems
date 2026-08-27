#include <algorithm>
#include <vector>

class Solution {
  public:
    // After sorting, the k smallest elements occupy the front of the
    // array and the k largest the back; equal values may straddle the
    // cut, but their contribution to each sum is unchanged.
    int absDifference(std::vector<int> &nums, int k) {
        std::sort(nums.begin(), nums.end());
        int small = 0;
        int large = 0;
        for (int i = 0; i < k; i++) {
            small += nums[i];
            large += nums[nums.size() - 1 - i];
        }
        return large - small;
    }
};
