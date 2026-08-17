class Solution {
  public:
    int findKthLargest(vector<int> &nums, int k) {
        // Sort a copy ascending; the kth largest sits k slots from the end.
        vector<int> sorted(nums);
        sort(sorted.begin(), sorted.end());
        return sorted[sorted.size() - k];
    }
};
