class Solution {
  public:
    int minOperations(vector<int> &nums) {
        int n = (int)nums.size();
        int operations = 0;
        for (int i = 0; i + 2 < n; i++) {
            if (nums[i] == 0) {
                operations++;
                nums[i] ^= 1;
                nums[i + 1] ^= 1;
                nums[i + 2] ^= 1;
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0)
                return -1;
        }
        return operations;
    }
};
