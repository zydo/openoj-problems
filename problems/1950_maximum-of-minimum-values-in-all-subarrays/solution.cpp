class Solution {
  public:
    vector<int> findMaximums(vector<int> &nums) {
        int n = nums.size();
        vector<int> left(n), right(n);
        vector<int> stack;
        for (int i = 0; i < n; i++) {
            while (!stack.empty() && nums[stack.back()] >= nums[i]) {
                stack.pop_back();
            }
            left[i] = stack.empty() ? -1 : stack.back();
            stack.push_back(i);
        }
        stack.clear();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.empty() && nums[stack.back()] >= nums[i]) {
                stack.pop_back();
            }
            right[i] = stack.empty() ? n : stack.back();
            stack.push_back(i);
        }
        vector<int> ans(n, 0);
        for (int i = 0; i < n; i++) {
            int length = right[i] - left[i] - 1;
            if (nums[i] > ans[length - 1]) {
                ans[length - 1] = nums[i];
            }
        }
        for (int i = n - 2; i >= 0; i--) {
            if (ans[i + 1] > ans[i]) {
                ans[i] = ans[i + 1];
            }
        }
        return ans;
    }
};
