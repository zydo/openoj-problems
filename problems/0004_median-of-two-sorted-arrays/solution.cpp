class Solution {
  public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2) {
        if (nums1.size() > nums2.size()) {
            swap(nums1, nums2);
        }
        int m = nums1.size(), n = nums2.size();
        int total = m + n;
        int half = total / 2;
        int lo = 0, hi = m;
        while (true) {
            int i = (lo + hi) / 2;
            int j = half - i;
            long long aLeft = i > 0 ? nums1[i - 1] : LLONG_MIN;
            long long aRight = i < m ? nums1[i] : LLONG_MAX;
            long long bLeft = j > 0 ? nums2[j - 1] : LLONG_MIN;
            long long bRight = j < n ? nums2[j] : LLONG_MAX;
            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 == 1) {
                    return (double)min(aRight, bRight);
                }
                return (max(aLeft, bLeft) + min(aRight, bRight)) / 2.0;
            }
            if (aLeft > bRight) {
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
    }
};
