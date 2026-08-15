class Solution {
  public:
    long long minimumReplacement(vector<int> &nums) {
        long long ops = 0;
        long long bound = nums.back();
        for (int i = (int)nums.size() - 2; i >= 0; i--) {
            long long x = nums[i];
            if (x <= bound) {
                bound = x;
            } else {
                long long k = (x + bound - 1) / bound;
                ops += k - 1;
                bound = x / k;
            }
        }
        return ops;
    }
};
