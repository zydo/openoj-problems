class Solution {
  public:
    long long maximumSubarraySum(vector<int> &nums, int k) {
        unordered_map<int, int> counts;
        long long windowSum = 0;
        long long best = 0;
        for (int i = 0; i < (int)nums.size(); i++) {
            int value = nums[i];
            counts[value] += 1;
            windowSum += value;
            if (i >= k) {
                int old = nums[i - k];
                auto it = counts.find(old);
                if (it->second == 1) {
                    counts.erase(it);
                } else {
                    it->second -= 1;
                }
                windowSum -= old;
            }
            if (i >= k - 1 && (int)counts.size() == k && windowSum > best) {
                best = windowSum;
            }
        }
        return best;
    }
};
