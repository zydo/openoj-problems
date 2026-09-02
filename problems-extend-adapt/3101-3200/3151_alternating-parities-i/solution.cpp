class Solution {
  public:
    bool hasAlternatingParities(vector<int> &nums) {
        for (int i = 1; i < nums.size(); i++) {
            if ((nums[i - 1] & 1) == (nums[i] & 1)) {
                return false;
            }
        }
        return true;
    }
};
