class Solution {
  public:
    int minimizeMax(vector<int> &nums, int p) {
        vector<int> sorted(nums);
        sort(sorted.begin(), sorted.end());
        int n = (int)sorted.size();
        int lo = 0, hi = sorted[n - 1] - sorted[0];
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (can(sorted, mid, p))
                hi = mid;
            else
                lo = mid + 1;
        }
        return lo;
    }

  private:
    bool can(vector<int> &nums, int diff, int p) {
        int count = 0;
        int i = 1;
        while (i < (int)nums.size()) {
            if (nums[i] - nums[i - 1] <= diff) {
                count++;
                i += 2;
            } else {
                i += 1;
            }
        }
        return count >= p;
    }
};
