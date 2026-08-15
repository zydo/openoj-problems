class Solution {
  public:
    vector<int> nextGreaterElements(vector<int> &nums) {
        int n = nums.size();
        vector<int> result(n, -1);
        vector<int> stack;
        for (int i = 0; i < 2 * n; i++) {
            int idx = i % n;
            while (!stack.empty() && nums[stack.back()] < nums[idx]) {
                result[stack.back()] = nums[idx];
                stack.pop_back();
            }
            if (i < n) {
                stack.push_back(idx);
            }
        }
        return result;
    }
};
