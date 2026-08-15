class Solution {
  public:
    int minimizeArrayValue(vector<int> &nums) {
        long long total = 0;
        int best = 0;
        for (int i = 0; i < (int)nums.size(); i++) {
            total += nums[i];
            long long candidate = (total + i) / (i + 1);
            if (candidate > best) {
                best = (int)candidate;
            }
        }
        return best;
    }
};
