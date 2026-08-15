class Solution {
  public:
    long long countSubarrays(vector<int> &nums, int minK, int maxK) {
        long long count = 0;
        long long last_bad = -1, last_min = -1, last_max = -1;
        for (int i = 0; i < (int)nums.size(); i++) {
            int x = nums[i];
            if (x < minK || x > maxK)
                last_bad = i;
            if (x == minK)
                last_min = i;
            if (x == maxK)
                last_max = i;
            count += max(0LL, min(last_min, last_max) - last_bad);
        }
        return count;
    }
};
