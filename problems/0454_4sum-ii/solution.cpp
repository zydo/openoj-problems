class Solution {
  public:
    int fourSumCount(vector<int> &nums1, vector<int> &nums2, vector<int> &nums3,
                     vector<int> &nums4) {
        unordered_map<int, int> sums;
        sums.reserve(nums1.size() * nums2.size() * 2);
        for (int a : nums1) {
            for (int b : nums2) {
                sums[a + b]++;
            }
        }
        int total = 0;
        for (int c : nums3) {
            for (int d : nums4) {
                auto it = sums.find(-(c + d));
                if (it != sums.end())
                    total += it->second;
            }
        }
        return total;
    }
};
