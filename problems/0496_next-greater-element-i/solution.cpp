class Solution {
  public:
    vector<int> nextGreaterElement(vector<int> &nums1, vector<int> &nums2) {
        unordered_map<int, int> nextGreater;
        vector<int> stack;
        for (int value : nums2) {
            while (!stack.empty() && stack.back() < value) {
                nextGreater[stack.back()] = value;
                stack.pop_back();
            }
            stack.push_back(value);
        }
        for (int value : stack) {
            nextGreater[value] = -1;
        }
        vector<int> result;
        result.reserve(nums1.size());
        for (int value : nums1) {
            result.push_back(nextGreater[value]);
        }
        return result;
    }
};
