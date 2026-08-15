class Solution {
  public:
    int widestPairOfIndices(vector<int> &nums1, vector<int> &nums2) {
        unordered_map<int, int> first;
        first.reserve(nums1.size() * 2);
        first[0] = -1;
        int diff = 0;
        int best = 0;
        for (int i = 0; i < (int)nums1.size(); i++) {
            diff += nums1[i] - nums2[i];
            auto it = first.find(diff);
            if (it != first.end()) {
                best = max(best, i - it->second);
            } else {
                first[diff] = i;
            }
        }
        return best;
    }
};
