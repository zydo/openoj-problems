class Solution {
  public:
    long long zeroFilledSubarray(vector<int> &nums) {
        long long total = 0;
        long long streak = 0;
        for (int num : nums) {
            if (num == 0) {
                streak++;
                total += streak;
            } else {
                streak = 0;
            }
        }
        return total;
    }
};
