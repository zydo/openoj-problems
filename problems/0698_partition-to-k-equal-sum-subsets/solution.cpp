class Solution {
    bool dfs(const vector<int> &nums, int target, int full, int mask, int curr,
             vector<char> &memo) {
        if (mask == full)
            return true;
        if (curr == target)
            return dfs(nums, target, full, mask, 0, memo);
        char &slot = memo[(long long)mask * (target + 1) + curr];
        if (slot != 0)
            return slot == 1;
        for (int i = 0; i < (int)nums.size(); i++) {
            if (!((mask >> i) & 1) && curr + nums[i] <= target) {
                if (dfs(nums, target, full, mask | (1 << i), curr + nums[i], memo)) {
                    slot = 1;
                    return true;
                }
            }
        }
        slot = 2;
        return false;
    }

  public:
    bool canPartitionKSubsets(vector<int> &nums, int k) {
        long long total = 0;
        for (int v : nums)
            total += v;
        if (total % k != 0)
            return false;
        int target = (int)(total / k);
        sort(nums.begin(), nums.end(), greater<int>());
        if (nums[0] > target)
            return false;
        int n = nums.size();
        int full = (1 << n) - 1;
        vector<char> memo((long long)(1 << n) * (target + 1), 0);
        return dfs(nums, target, full, 0, 0, memo);
    }
};
