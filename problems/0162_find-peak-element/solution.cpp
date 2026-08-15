class Solution {
  public:
    int findPeakElement(vector<int> &nums) {
        int n = static_cast<int>(nums.size());
        for (int i = 0; i < n; i++) {
            bool leftOk = i == 0 || nums[i] > nums[i - 1];
            bool rightOk = i == n - 1 || nums[i] > nums[i + 1];
            if (leftOk && rightOk) {
                return i;
            }
        }
        return -1;
    }
};
