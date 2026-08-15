class Solution {
  public:
    long long minimumOperations(vector<int> &nums, vector<int> &target) {
        long long prev = 0;
        long long total = 0;
        for (size_t i = 0; i < nums.size(); i++) {
            long long cur = (long long)nums[i] - target[i];
            if (cur > prev)
                total += cur - prev;
            prev = cur;
        }
        if (prev < 0)
            total += -prev;
        return total;
    }
};
