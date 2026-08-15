class Solution {
  public:
    int numberOfSubarrays(vector<int> &nums, int k) {
        int n = nums.size();
        vector<long long> counts(n + 1, 0);
        counts[0] = 1;
        int odds = 0;
        long long result = 0;
        for (int x : nums) {
            odds += x & 1;
            if (odds - k >= 0) {
                result += counts[odds - k];
            }
            counts[odds]++;
        }
        return (int)result;
    }
};
