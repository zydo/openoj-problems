class Solution {
  public:
    long long minCost(vector<int> &nums, vector<int> &cost) {
        int n = nums.size();
        vector<pair<long long, long long>> pairs(n);
        for (int i = 0; i < n; i++) {
            pairs[i] = {(long long)nums[i], (long long)cost[i]};
        }
        sort(pairs.begin(), pairs.end());
        long long total = 0;
        for (auto &p : pairs)
            total += p.second;
        long long target = (total + 1) / 2;
        long long prefix = 0;
        long long median = pairs[n - 1].first;
        for (auto &p : pairs) {
            prefix += p.second;
            if (prefix >= target) {
                median = p.first;
                break;
            }
        }
        long long ans = 0;
        for (auto &p : pairs) {
            ans += llabs(p.first - median) * p.second;
        }
        return ans;
    }
};
