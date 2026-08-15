class Solution {
  public:
    int longestNiceSubarray(vector<int> &nums) {
        int best = 1;
        int left = 0;
        int windowOr = 0;
        for (int right = 0; right < (int)nums.size(); right++) {
            int value = nums[right];
            while ((windowOr & value) != 0) {
                windowOr ^= nums[left];
                left++;
            }
            windowOr |= value;
            if (right - left + 1 > best) {
                best = right - left + 1;
            }
        }
        return best;
    }
};
