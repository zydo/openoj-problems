class Solution {
  public:
    int splitArray(vector<int> &nums, int k) {
        long long lo = LLONG_MIN;
        long long hi = 0;
        for (int value : nums) {
            lo = max(lo, (long long)value);
            hi += value;
        }
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2;
            if (feasible(nums, k, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int)lo;
    }

  private:
    bool feasible(vector<int> &nums, int k, long long limit) {
        int pieces = 1;
        long long current = 0;
        for (int value : nums) {
            if (current + value > limit) {
                pieces++;
                if (pieces > k) {
                    return false;
                }
                current = value;
            } else {
                current += value;
            }
        }
        return true;
    }
};
