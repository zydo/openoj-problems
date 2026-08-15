class Solution {
  public:
    bool canJump(vector<int> &nums) {
        int farthest = 0;
        int last = (int)nums.size() - 1;
        for (int index = 0; index < (int)nums.size(); index++) {
            int reach = nums[index];
            if (index > farthest) {
                return false;
            }
            if (index + reach > farthest) {
                farthest = index + reach;
            }
            if (farthest >= last) {
                return true;
            }
        }
        return true;
    }
};
