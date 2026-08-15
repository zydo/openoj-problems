class Solution {
  public:
    int maximumScore(vector<int> &nums, vector<int> &multipliers) {
        int m = multipliers.size();
        int n = nums.size();
        const long long NEG_INF = LLONG_MIN / 4;
        vector<long long> prev(m + 1, 0), cur(m + 1, NEG_INF);
        for (int i = m - 1; i >= 0; i--) {
            for (int l = 0; l <= i; l++) {
                int r = i - l;
                long long takeLeft = prev[l + 1] + (long long)multipliers[i] * nums[l];
                long long takeRight = prev[l] + (long long)multipliers[i] * nums[n - 1 - r];
                cur[l] = takeLeft >= takeRight ? takeLeft : takeRight;
            }
            swap(prev, cur);
        }
        return (int)prev[0];
    }
};
