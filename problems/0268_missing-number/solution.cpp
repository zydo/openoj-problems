class Solution {
  public:
    int missingNumber(vector<int> &nums) {
        long long n = nums.size();
        long long total = 0;
        for (int value : nums) {
            total += value;
        }
        return (int)(n * (n + 1) / 2 - total);
    }
};
