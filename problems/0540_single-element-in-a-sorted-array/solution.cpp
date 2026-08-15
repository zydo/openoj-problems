class Solution {
  public:
    int singleNonDuplicate(vector<int> &nums) {
        int lo = 0, hi = (int)nums.size() - 1;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (mid % 2 == 1)
                mid -= 1;
            if (nums[mid] == nums[mid + 1]) {
                lo = mid + 2;
            } else {
                hi = mid;
            }
        }
        return nums[lo];
    }
};
