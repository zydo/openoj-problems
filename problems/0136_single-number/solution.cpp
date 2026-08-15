class Solution {
  public:
    int singleNumber(vector<int> &nums) {
        int result = 0;
        for (int value : nums) {
            result ^= value;
        }
        return result;
    }
};
