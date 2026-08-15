class Solution {
  public:
    long long maxSubarraySum(vector<int> &nums) {
        int n = (int)nums.size();
        if (n == 1)
            return nums[0];
        // prefixMap keyed by the deleted value; key 0 tracks min prefix sum.
        unordered_map<long long, long long> prefixMap;
        prefixMap[0] = 0;
        long long prefixSum = 0;
        long long minPrefix = 0;
        long long result = nums[0];
        for (int num : nums) {
            prefixSum += num;
            if (prefixSum - minPrefix > result)
                result = prefixSum - minPrefix;
            if (num < 0) {
                long long key = num;
                auto it = prefixMap.find(key);
                if (it != prefixMap.end()) {
                    it->second = min(it->second, prefixMap[0]) + num;
                } else {
                    prefixMap[key] = prefixMap[0] + num;
                }
                if (prefixMap[key] < minPrefix)
                    minPrefix = prefixMap[key];
            }
            if (prefixSum < prefixMap[0])
                prefixMap[0] = prefixSum;
            if (prefixMap[0] < minPrefix)
                minPrefix = prefixMap[0];
        }
        return result;
    }
};
