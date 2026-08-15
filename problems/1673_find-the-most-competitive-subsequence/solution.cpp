class Solution {
  public:
    vector<int> mostCompetitive(vector<int> &nums, int k) {
        vector<int> stack;
        stack.reserve(k);
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            int value = nums[i];
            int remaining = n - i;
            while (!stack.empty() && stack.back() > value && (int)stack.size() + remaining > k) {
                stack.pop_back();
            }
            if ((int)stack.size() < k) {
                stack.push_back(value);
            }
        }
        return stack;
    }
};
