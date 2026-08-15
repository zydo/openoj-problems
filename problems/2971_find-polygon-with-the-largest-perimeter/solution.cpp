class Solution {
  public:
    long long largestPerimeter(vector<int> &nums) {
        sort(nums.begin(), nums.end());
        long long total = 0;
        for (int x : nums)
            total += x;
        for (int i = (int)nums.size() - 1; i > 1; i--) {
            if (total - nums[i] > nums[i])
                return total;
            total -= nums[i];
        }
        return -1;
    }
};
