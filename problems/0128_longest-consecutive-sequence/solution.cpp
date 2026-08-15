class Solution {
  public:
    int longestConsecutive(vector<int> &nums) {
        unordered_set<long long> values(nums.begin(), nums.end());
        int best = 0;
        for (long long value : values) {
            if (values.find(value - 1) == values.end()) {
                int length = 1;
                while (values.find(value + length) != values.end()) {
                    length++;
                }
                best = max(best, length);
            }
        }
        return best;
    }
};
