class Solution {
  public:
    int deleteAndEarn(vector<int> &nums) {
        map<int, long long> count;
        for (int v : nums)
            count[v]++;
        long long take = 0, skip = 0;
        bool hasPrev = false;
        int prev = 0;
        for (const auto &[value, c] : count) {
            long long base = (hasPrev && prev == value - 1) ? skip : max(take, skip);
            long long newTake = base + (long long)value * c;
            long long newSkip = max(take, skip);
            take = newTake;
            skip = newSkip;
            prev = value;
            hasPrev = true;
        }
        return (int)max(take, skip);
    }
};
