class Solution {
  public:
    int findKthLargest(vector<int> &nums, int k) {
        vector<int> sorted(nums);
        sort(sorted.begin(), sorted.end());
        return sorted[sorted.size() - k];
    }
};
