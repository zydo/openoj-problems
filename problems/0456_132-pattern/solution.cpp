class Solution {
  public:
    bool find132pattern(vector<int> &nums) {
        if (nums.size() < 3) {
            return false;
        }
        vector<int> stack;
        long long third = LLONG_MIN;
        for (int i = (int)nums.size() - 1; i >= 0; i--) {
            int value = nums[i];
            if (value < third) {
                return true;
            }
            while (!stack.empty() && stack.back() < value) {
                third = stack.back();
                stack.pop_back();
            }
            stack.push_back(value);
        }
        return false;
    }
};
