class Solution {
  public:
    vector<int> sortColors(vector<int> &nums) {
        int counts[3] = {0, 0, 0};
        for (int value : nums) {
            counts[value]++;
        }
        int index = 0;
        for (int color = 0; color < 3; color++) {
            for (int c = 0; c < counts[color]; c++) {
                nums[index++] = color;
            }
        }
        return nums;
    }
};
