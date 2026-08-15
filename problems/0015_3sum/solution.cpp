class Solution {
  public:
    vector<vector<int>> threeSum(vector<int> &nums) {
        sort(nums.begin(), nums.end());
        int n = (int)nums.size();
        vector<vector<int>> result;
        for (int i = 0; i + 2 < n; i++) {
            if (i > 0 && nums[i] == nums[i - 1])
                continue;
            if ((long long)nums[i] * 3 > 0)
                break;
            int left = i + 1, right = n - 1;
            while (left < right) {
                long long total = (long long)nums[i] + nums[left] + nums[right];
                if (total < 0) {
                    left++;
                } else if (total > 0) {
                    right--;
                } else {
                    result.push_back({nums[i], nums[left], nums[right]});
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1])
                        left++;
                    while (left < right && nums[right] == nums[right + 1])
                        right--;
                }
            }
        }
        return result;
    }
};
