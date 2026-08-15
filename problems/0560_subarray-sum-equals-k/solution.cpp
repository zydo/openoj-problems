class Solution {
  public:
    int subarraySum(vector<int> &nums, int k) {
        unordered_map<long long, int> prefixCounts;
        prefixCounts[0] = 1;
        long long running = 0;
        int total = 0;
        for (int value : nums) {
            running += value;
            auto it = prefixCounts.find(running - k);
            if (it != prefixCounts.end()) {
                total += it->second;
            }
            prefixCounts[running]++;
        }
        return total;
    }
};
