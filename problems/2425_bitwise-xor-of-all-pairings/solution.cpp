class Solution {
  public:
    int xorAllNums(vector<int> &nums1, vector<int> &nums2) {
        int answer = 0;
        if (nums2.size() % 2 == 1) {
            for (int value : nums1) {
                answer ^= value;
            }
        }
        if (nums1.size() % 2 == 1) {
            for (int value : nums2) {
                answer ^= value;
            }
        }
        return answer;
    }
};
