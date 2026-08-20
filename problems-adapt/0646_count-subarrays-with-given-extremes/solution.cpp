class Solution {
  public:
    long long countSubarraysWithExtremes(vector<int> &nums, int lo, int hi) {
        long long count = 0;
        // most recent positions of an out-of-range element, lo, and hi
        long long last_bad = -1, last_min = -1, last_max = -1;
        for (int i = 0; i < (int)nums.size(); i++) {
            int x = nums[i];
            // a valid subarray ending later must start after a bad element
            if (x < lo || x > hi)
                last_bad = i;
            // tracking the last occurrence is enough: it covers earlier ones
            if (x == lo)
                last_min = i;
            if (x == hi)
                last_max = i;
            // starts for this right end: after last_bad, at or before
            // min(last_min, last_max); the 0 clamp skips ends with none
            count += max(0LL, min(last_min, last_max) - last_bad);
        }
        return count;
    }
};
