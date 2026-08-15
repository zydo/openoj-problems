class Solution {
  public:
    vector<int> moveZeroes(vector<int> &nums) {
        int slow = 0;
        for (int fast = 0; fast < (int)nums.size(); fast++) {
            if (nums[fast] != 0) {
                swap(nums[slow], nums[fast]);
                slow++;
            }
        }
        return nums;
    }
};
