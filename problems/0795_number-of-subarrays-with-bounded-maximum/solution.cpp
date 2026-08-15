class Solution {
    long long countBelow(vector<int> &nums, int bound) {
        long long total = 0;
        long long run = 0;
        for (int v : nums) {
            if (v <= bound) {
                run += 1;
                total += run;
            } else {
                run = 0;
            }
        }
        return total;
    }

  public:
    int numSubarrayBoundedMax(vector<int> &nums, int left, int right) {
        return (int)(countBelow(nums, right) - countBelow(nums, left - 1));
    }
};
