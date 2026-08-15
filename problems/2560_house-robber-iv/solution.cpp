class Solution {
  public:
    int minCapability(vector<int> &nums, int k) {
        int lo = nums[0], hi = nums[0];
        for (int x : nums) {
            lo = min(lo, x);
            hi = max(hi, x);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(nums, mid, k)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

  private:
    bool feasible(vector<int> &nums, int cap, int k) {
        int count = 0;
        int i = 0;
        while (i < (int)nums.size()) {
            if (nums[i] <= cap) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    }
};
